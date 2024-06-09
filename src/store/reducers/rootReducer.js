import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

/**
 * Root reducer combining multiple reducers.
 *
 * This function combines the searchReducer with other potential reducers into a single
 * root reducer using Redux's `combineReducers` utility. This allows for modular state management
 * and separation of concerns within the Redux store.
 *
 * @returns {Function} The combined reducer function.
 */
export default combineReducers({
    search: searchReducer, // Combines the searchReducer under the 'search' key in the state
});
