import { configureStore } from "@reduxjs/toolkit";
// import { Iterable } from "immutable";
import authReducers from "./reducers/authReducers";
import profileReducers from "./reducers/profileReducers";
import quizReducers from "./reducers/quizReducers";
export default configureStore({
  reducer: {
    auth: authReducers,
    quiz: quizReducers,
    profile: profileReducers,
  },
});
