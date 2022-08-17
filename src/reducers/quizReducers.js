import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fathomless-meadow-37873.herokuapp.com/";

export const quizSlice = createSlice({
  name: "Quiz",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {},
});

export default quizSlice.reducer;

export const createUserQuiz = createAsyncThunk(
  "quiz/createQuiz",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}quiz/createquiz`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
export const createUserQuestion = createAsyncThunk(
  "quiz/createQuestion",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}quiz/question`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
