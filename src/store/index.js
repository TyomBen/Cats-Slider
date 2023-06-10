import { combineReducers } from "redux";
import { fetchingReducer } from "./reduces/reduce";

export const allReducers = combineReducers ({
    data : fetchingReducer
})