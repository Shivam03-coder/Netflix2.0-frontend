import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./redux_middleware/Api_middleware";
import { AuthstateSlice } from "./redux_slices/Authstate.slice";
import { AppstateSlice } from "./redux_slices/Appstate.slice";

export const rootReducer = combineReducers({
  appstate: AppstateSlice.reducer,
  auth: AuthstateSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
