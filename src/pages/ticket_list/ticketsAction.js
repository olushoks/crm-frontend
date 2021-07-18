import axios from "axios";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  filterTickets,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  fetchSingleTicketFail,
} from "./ticketSlice";

/*===================================*
        END OF IMPORTS
*===================================*/

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await axios.get("http://localhost:5000/v1/ticket", {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterTicketTable = (search) => (dispatch) => {
  dispatch(filterTickets(search));
};

export const fetchSingleTicket = (_id) => async (dispatch) => {
  fetchSingleTicketLoading();

  try {
    const result = await axios.get(`http://localhost:5000/v1/ticket/${_id}`, {
      headers: {
        Authorization: sessionStorage.getItem("accessJWT"),
      },
    });
    dispatch(fetchSingleTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
    console.log(error);
  }
};
