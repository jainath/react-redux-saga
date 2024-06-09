/**
 * Action type for initiating a search data request.
 *
 * This action type is dispatched to trigger the search data request saga.
 * @type {string}
 */
export const SEARCH_DATA_REQUEST = "SEARCH_DATA_REQUEST";

/**
 * Action type for handling successful search data response.
 *
 * This action type is dispatched when the search data request is successful,
 * containing the search results in the payload.
 * @type {string}
 */
export const SEARCH_DATA_SUCCESS = "SEARCH_DATA_SUCCESS";

/**
 * Action type for handling failed search data response.
 *
 * This action type is dispatched when the search data request fails,
 * containing the error information in the payload.
 * @type {string}
 */
export const SEARCH_DATA_FAILURE = "SEARCH_DATA_FAILURE";
