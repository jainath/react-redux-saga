import axios from "axios";

/**
 * Function to make an API call using axios.
 *
 * @param {string} url - The URL to make the request to.
 * @param {string} [method='get'] - The HTTP method to use for the request.
 * @param {Object} [data=null] - The data to send in the request body (for POST, PUT, PATCH methods).
 * @param {Object} [params={}] - The URL parameters to be sent with the request.
 * @param {Object} [headers={}] - The headers to be sent with the request.
 *
 * @returns {Object} An object containing the axios promise and the cancel token source.
 */
export const callApi = (
    url,
    method = "get",
    data = null,
    params = {},
    headers = {}
) => {
    const source = axios.CancelToken.source();

    const options = {
        url,
        method,
        params,
        headers,
        cancelToken: source.token,
        data,
    };

    try {
        // Return the promise and the cancel token source immediately
        return {
            promise: axios(options),
            source,
        };
    } catch (error) {
        console.error("Error in API call:", error);
        throw error;
    }
};
