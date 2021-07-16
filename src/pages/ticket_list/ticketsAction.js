import axios from "axios";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  filterTickets,
} from "./ticketSlice";

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await axios.get("http://localhost:5000/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdV9zaG9rc0BwYXpjYXJydXMub3JnIiwiaWF0IjoxNjI2NDIxOTIyLCJleHAiOjE2MjY0MjI4MjJ9.9q2wfOW-gXLTRlCKKhVqEUiGs3O8j1Hjseh8nQtWd1U",
      },
    });
    console.log(result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterTicketTable = (search) => (dispatch) => {
  dispatch(filterTickets(search));
};
