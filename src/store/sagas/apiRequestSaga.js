import { cancelled, put } from "redux-saga/effects";
import { callApi } from "../../services/api";

/**
 * Saga to handle API requests.
 *
 * This saga function performs an API request using the provided parameters and dispatches
 * appropriate success or failure actions based on the result of the API call.
 *
 * @param {Object} action - The action object dispatched to trigger this saga.
 * @param {string} action.url - The URL endpoint for the API request.
 * @param {string} action.method - The HTTP method for the API request (e.g., 'GET', 'POST').
 * @param {Object} [action.data] - The request payload for POST/PUT requests.
 * @param {Object} [action.params] - The query parameters for the API request.
 * @param {Object} [action.headers] - The headers for the API request.
 * @param {Object} action.actionType - The action types for success and failure.
 * @param {string} action.actionType.SUCCESS - The action type to dispatch on successful API response.
 * @param {string} action.actionType.FAILURE - The action type to dispatch on failed API response.
 */
function* apiRequestSaga({ url, method, data, params, headers, actionType }) {
    // Initiates the API call and gets the promise and cancel source
    const { promise, source } = callApi(url, method, data, params, headers);

    try {
        // Wait for the API response
        const response = yield promise;
        // Dispatch success action with the response data
        yield put({ type: actionType.SUCCESS, payload: response?.data });
    } catch (error) {
        if (error.message === "Request canceled") {
            console.log("Saga was canceled due to a new request");
        } else {
            console.log("Saga was canceled");
        }
        // Dispatch failure action with the error
        yield put({ type: actionType.FAILURE, payload: error });
    } finally {
        // Check if the saga was canceled and handle cancellation
        if (yield cancelled()) {
            console.log("Saga canceled by takeLatest");
            // Cancel the API request if the saga was canceled
            source.cancel("Saga canceled by takeLatest");
        }
    }
}

export default apiRequestSaga;
