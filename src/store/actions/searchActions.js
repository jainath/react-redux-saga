import { SEARCH_DATA_REQUEST } from "./actionTypes";

export const searchData = (payload) => ({
    type: SEARCH_DATA_REQUEST,
    payload,
});
