import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count++;
    },
  },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
