import { createSlice } from "@reduxjs/toolkit";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  showReset: true,
  email: "",
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
    passwordResetSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload.message;
      state.email = payload.email;
      state.showReset = false;
    },
    updatePasswordSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
  },
});

const { reducer, actions } = passwordResetSlice;

export const {
  passwordResetPending,
  passwordResetError,
  passwordResetSuccess,
  updatePasswordSuccess,
} = actions;
export default reducer;
