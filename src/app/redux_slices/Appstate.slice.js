import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignupForm: false,
  Moviesvideo: null,
  MoviesSercheddata: null,
};

export const AppstateSlice = createSlice({
  name: "appstate",
  initialState,
  reducers: {
    Opensignupform: (state) => {
      state.isSignupForm = !state.isSignupForm;
    },
    CloseSignupform: (state) => {
      state.isSignupForm = !state.isSignupForm;
    },
    Moviesvideebyid: (state, action) => {
      state.Moviesvideo = action.payload;
    },
    Moviesbyserach: (state, action) => {
      state.MoviesSercheddata = action.payload;
    },
  },
});

export const {
  Opensignupform,
  CloseSignupform,
  Moviesvideebyid,
  Moviesbyserach,
} = AppstateSlice.actions;
