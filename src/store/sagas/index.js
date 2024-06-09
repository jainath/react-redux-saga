import { all } from "redux-saga/effects";
import searchSagas from "./searchSagas";

/**
 * Root saga to combine all sagas.
 *
 * This saga function combines multiple sagas into a single root saga using the `all` effect,
 * allowing them to run concurrently. It is the entry point for running all the sagas
 * in the application.
 *
 * @yields {Array} An array of saga effects to be run in parallel.
 */
export default function* rootSaga() {
    yield all([
        searchSagas(), // Adds the search-related sagas to the root saga
    ]);
}
