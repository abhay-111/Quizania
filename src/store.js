import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./reducers/authReducers";
export default configureStore({
  reducer: {
    auth: authReducers,
  },
});
