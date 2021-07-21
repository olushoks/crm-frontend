import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const registrationSlice = createSlice({
  name: "userReg",
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading = true;
    },
    registrationFailed: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
  },
});

const { reducer, actions } = registrationSlice;

export const { registrationFailed, registrationPending, registrationSuccess } =
  actions;

export default reducer;
