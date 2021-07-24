import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const passwordResetSlice = createSlice({
  name: "password-reset",
  initialState,
  reducers: {
    passwordResetPending: (state) => {
      state.isLoading = true;
    },
    passwordResetError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    passwordResetFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
  },
});

const { reducer, actions } = passwordResetSlice;

export const { passwordResetPending, passwordResetError, asswordResetFail } =
  actions;
export default reducer;
