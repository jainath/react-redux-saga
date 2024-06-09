import { call, takeLatest } from "redux-saga/effects";
import {
    SEARCH_DATA_FAILURE,
    SEARCH_DATA_REQUEST,
    SEARCH_DATA_SUCCESS,
} from "../actions/actionTypes";
import apiRequestSaga from "./apiRequestSaga";

/**
 * Saga to fetch search data.
 *
 * This saga function triggers the API request saga with the appropriate parameters
 * for fetching search data. It handles the API call and dispatches success or failure actions
 * based on the response.
 *
 * @param {Object} action - The action object dispatched to trigger this saga.
 * @param {Object} action.payload - The payload of the action.
 * @param {Object} action.payload.params - The query parameters for the API request.
 */
function* fetchSearchSaga(action) {
    yield call(apiRequestSaga, {
        url: "https://httpbin.org/delay/1", // The URL endpoint for the API request
        method: "GET", // The HTTP method for the API request
        data: null, // No request payload needed for GET request
        params: action.payload.params, // The query parameters for the API request
        actionType: {
            SUCCESS: SEARCH_DATA_SUCCESS, // Action type to dispatch on successful API response
            FAILURE: SEARCH_DATA_FAILURE, // Action type to dispatch on failed API response
        },
    });
}

/**
 * Root saga for search-related sagas.
 *
 * This function listens for the SEARCH_DATA_REQUEST action and triggers the fetchSearchSaga
 * function using the takeLatest effect, ensuring only the latest request is processed.
 */
export default function* searchSagas() {
    yield takeLatest(SEARCH_DATA_REQUEST, fetchSearchSaga);
}
