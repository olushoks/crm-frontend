import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  filterTicketsRes: [],
  isLoading: false,
  error: "",
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
  },
});

const { reducer, actions } = ticketListSlice;
export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  filterTickets,
} = actions;
export default reducer;
