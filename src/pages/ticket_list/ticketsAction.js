import axios from "axios";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
} from "./ticketSlice";

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketLoading());
  try {
    const result = await axios.get("http://localhost:5000/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9sdV9zaG9rc0BwYXpjYXJydXMub3JnIiwiaWF0IjoxNjI2NDE2ODk5LCJleHAiOjE2MjY0MTc3OTl9.cm5QwXDMdPCT6q9AGGa7uvikDKtXrvVDT4awqCcVWVM",
      },
    });
    console.log(result);
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};
