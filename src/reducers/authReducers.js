import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {},
});

export default authSlice.reducer;
// export const { increment } = authSlice.actions;
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (payload) => {
    try {
      const data = await axios({
        url: "http://fathomless-meadow-37873.herokuapp.com/auth/signup",
        method: "POST",
        data: payload,
      });

      // return data;
    } catch (err) {
      // return err;
      console.log(err);
    }
  }
);
