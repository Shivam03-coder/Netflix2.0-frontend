import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  User: localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : null,
};

export const AuthstateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setcredentials: (state, action) => {
      state.User = action.payload;
      localStorage.setItem("userinfo", JSON.stringify(action.payload));
    },
    clearcredentials: (state) => {
      state.User = null;
      localStorage.removeItem("userinfo");
    },
  },
});
export const { setcredentials, clearcredentials } = AuthstateSlice.actions;
