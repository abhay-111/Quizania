import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fathomless-meadow-37873.herokuapp.com/";

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

export const getQuizData = createAsyncThunk(
  "quiz/getQuizData",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}quiz/quizData`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
export const submitUserQuiz = createAsyncThunk(
  "quiz/submitQuiz",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}leaderboard/submitQuiz`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
export const getLatestLeaderboard = createAsyncThunk(
  "quiz/getLatestLeaderboard",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}leaderboard/getLeaderBoard`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);

export const quizSlice = createSlice({
  name: "Quiz",
  initialState: {
    currentQuiz: {},
  },
  reducers: {
    changeSelectedOption(state, action) {
      const { questionIndex, idx } = action.payload;
      const newQuiz = {
        ...state.currentQuiz,
        questions: state.currentQuiz.questions.map((question, i) => {
          if (i == questionIndex) {
            question.option.forEach((op, indx) => {
              if (indx == idx) {
                op["isSelected"] = true;
              } else {
                op["isSelected"] = false;
              }
            });
          }
          return question;
        }),
      };
      state.currentQuiz = newQuiz;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizData.fulfilled, (state, action) => {
      state.currentQuiz = action.payload.data;
      console.log(state.currentQuiz);
    });
  },
});

export default quizSlice.reducer;
export const { changeSelectedOption } = quizSlice.actions;
