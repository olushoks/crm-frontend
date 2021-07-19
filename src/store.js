import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket_list/ticketSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import createTicketReducer from "./components/add_ticket_form/addTicketSlice";

/*===================================*
        END OF IMPORTS
*===================================*/

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    login: loginReducer,
    user: userReducer,
    createTicket: createTicketReducer,
  },
});

export default store;
