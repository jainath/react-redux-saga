import { SEARCH_DATA_SUCCESS } from "../actions/actionTypes";

const initialState = {
    data: null,
};

/**
 * Reducer function for handling search-related state updates.
 *
 * This function handles actions related to search data and updates the state accordingly.
 * It listens for the SEARCH_DATA_SUCCESS action type to update the data in the state.
 *
 * @param {Object} state - The current state of the reducer.
 * @param {Object} action - The action object dispatched to the reducer.
 * @param {string} action.type - The type of action being handled.
 * @param {Object} action.payload - The payload of the action containing the search data.
 * @returns {Object} The new state after applying the action.
 */
export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload, // Updates the search data in the state
            };
        default:
            return state; // Returns the current state if the action type is not handled
    }
}
