import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fathomless-meadow-37873.herokuapp.com/";

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
    const data = await axios({
      url: `${BASE_URL}auth/signup`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
export const loginUser = createAsyncThunk("auth/loginUser", async (payload) => {
  const data = await axios({
    url: `${BASE_URL}auth/login`,
    method: "POST",
    data: payload,
  });
  return data;
});
export const sendUserOtp = createAsyncThunk(
  "auth/sendUserOtp",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}auth/changepassword`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
export const verifyUserOtp = createAsyncThunk(
  "auth/sendUserOtp",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}auth/verifyOtp`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);

export const changeUserPassword = createAsyncThunk(
  "auth/changeUserPassword",
  async (payload) => {
    const data = await axios({
      url: `${BASE_URL}auth/passwordchange`,
      method: "POST",
      data: payload,
    });
    return data;
  }
);
