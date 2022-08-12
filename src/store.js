import { configureStore } from "@reduxjs/toolkit";
// import { Iterable } from "immutable";
import authReducers from "./reducers/authReducers";
export default configureStore({
  reducer: {
    auth: authReducers,
  },
});
