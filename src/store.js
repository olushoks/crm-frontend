import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket_list/ticketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});

export default store;
