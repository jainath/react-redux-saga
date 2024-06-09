import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

/**
 * Configure and create the Redux store.
 *
 * This function sets up the Redux store with the root reducer, saga middleware, and
 * any additional middleware. It also enables Redux DevTools for easier state management
 * debugging.
 *
 * @returns {Object} The configured Redux store.
 */
const store = configureStore({
    reducer: rootReducer, // The root reducer for the Redux store
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Apply saga middleware
    devTools: true, // Enable Redux DevTools
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
