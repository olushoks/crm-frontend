import axios from "axios";
import {
  createTicketPending,
  createTicketError,
  createTicketSuccess,
} from "./addTicketSlice";
import { fetchTickets } from "../../pages/ticket_list/ticketsAction";
import { logOut, refreshAccessJWT } from "../../pages/dashboard/userAction";

/*===================================*
        END OF IMPORTS
*===================================*/

export const openNewTicket = (formData) => async (dispatch) => {
  try {
    dispatch(createTicketPending());

    const result = await axios.post(
      "http://localhost:5000/v1/ticket",
      formData,
      {
        headers: { Authorization: sessionStorage.getItem("accessJWT") },
      }
    );

    if (result.data.status === "error") {
      return dispatch(createTicketError(result.data.message));
    }

    dispatch(createTicketSuccess(result.data.message));
    dispatch(fetchTickets());
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      const res = await refreshAccessJWT();

      res && dispatch(openNewTicket(formData));

      !res && logOut();
      return;
    }
    dispatch(createTicketError(error.message));
  }
};
