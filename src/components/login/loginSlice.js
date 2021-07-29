import { createSlice } from "@reduxjs/toolkit";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  isLoading: false,
  isAuth: false,
  error: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = "";
    },
    loginError: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = payload;
    },
    logOutUser: (state) => {
      state.isAuth = false;
      state.error = "";
    },
  },
});

const { reducer, actions } = loginSlice;
export const { loginPending, loginSuccess, loginError, logOutUser } = actions;
export default reducer;
