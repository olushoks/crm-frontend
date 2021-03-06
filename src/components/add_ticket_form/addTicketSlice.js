import { createSlice } from "@reduxjs/toolkit";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};

const createTicketSlice = createSlice({
  name: "createTicket",
  initialState,
  reducers: {
    createTicketPending: (state) => {
      state.isLoading = true;
    },
    createTicketError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.successMsg = "";
    },
    createTicketSuccess: (state, action) => {
      state.error = "";
      state.isLoading = false;
      state.successMsg = action.payload;
    },
    resetAlert: (state) => {
      state.error = "";
      state.isLoading = false;
      state.successMsg = "";
    },
  },
});

const { reducer, actions } = createTicketSlice;

export const {
  createTicketPending,
  createTicketError,
  createTicketSuccess,
  resetAlert,
} = actions;
export default reducer;
