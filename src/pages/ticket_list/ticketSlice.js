import { createSlice } from "@reduxjs/toolkit";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  tickets: [],
  filterTicketsRes: [],
  selectedTicket: {},
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
} = actions;
export default reducer;
