import { createSlice } from "@reduxjs/toolkit";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  tickets: [],
  filterTicketsRes: [],
  selectedTicket: {},
  isLoading: false,
  status: "",
  error: "",
  replyTicketErrRes: "",
  replyMsg: "",
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.filterTicketsRes = action.payload;
      state.error = "";
      state.isLoading = false;
    },
    fetchTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    filterTickets: (state, { payload }) => {
      state.filterTicketsRes = state.tickets.filter((row) => {
        if (!payload) return row;
        return row.subject.toLowerCase().includes(payload.toLowerCase());
      });
    },
    fetchSingleTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchSingleTicketSuccess: (state, action) => {
      state.selectedTicket = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    fetchSingleTicketFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    replyTicketLoading: (state) => {
      state.isLoading = true;
    },
    replyTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.replyMsg = action.payload;
    },
    replyTicketFail: (state, action) => {
      state.replyTicketErrRes = action.payload;
      state.isLoading = false;
    },
    closeTicketLoading: (state) => {
      state.isLoading = true;
    },
    closeTicketSuccess: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.replyMsg = action.payload;
    },
    closeTicketFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    resetAlert: (state) => {
      state.error = "";
      state.isLoading = false;
      state.replyMsg = "";
      state.replyTicketErrRes = "";
    },
  },
});

const { reducer, actions } = ticketListSlice;
export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  filterTickets,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
  resetAlert,
} = actions;
export default reducer;
