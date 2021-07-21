import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./pages/ticket_list/ticketSlice";
import loginReducer from "./components/login/loginSlice";
import userReducer from "./pages/dashboard/userSlice";
import registrationSlice from "./components/registration_form/registrationSlice";
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
    registration: registrationSlice,
  },
});

export default store;
