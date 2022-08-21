import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fathomless-meadow-37873.herokuapp.com/";
export const getAllQuiz = createAsyncThunk(
  "quiz/getAllQuiz",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}quiz/userQuizData`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);

export const profileSlice = createSlice({
  name: "Profile",
  initialState: {
    allQuiz: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllQuiz.fulfilled, (state, action) => {
      state.allQuiz = action.payload.data.UserData;
      console.log(state.allQuiz);
    });
  },
});

export default profileSlice.reducer;
// export const { changeSelectedOption } = quizSlice.actions;
