import axios from "axios";
import {
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
} from "./ticketSlice";
import { logOut, refreshAccessJWT } from "../dashboard/userAction";

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

    result.data.result.length &&
      dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      const res = await refreshAccessJWT();

      res && dispatch(fetchTickets());

      !res && logOut();
      return;
    }

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
    if (error.message === "Request failed with status code 403") {
      const res = await refreshAccessJWT();

      res && dispatch(fetchSingleTicket(_id));

      !res && logOut();
      return;
    }

    dispatch(fetchSingleTicketFail(error.message));
  }
};

export const replyTicket = (_id, message) => async (dispatch) => {
  replyTicketLoading();
  try {
    const result = await axios.put(
      `http://localhost:5000/v1/ticket/${_id}`,
      message,
      {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    );

    if (result.data.status === "error") {
      return dispatch(replyTicketFail(result.data.message));
    }

    dispatch(replyTicketSuccess(result.data.message));
    dispatch(fetchSingleTicket(_id));
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      const res = await refreshAccessJWT();

      res && dispatch(replyTicket(_id, message));

      !res && logOut();
      return;
    }
    dispatch(replyTicketFail(error.message));
  }
};

export const closeTicket = (_id) => async (dispatch) => {
  dispatch(closeTicketLoading());
  try {
    const result = await axios.patch(
      `http://localhost:5000/v1/ticket/close-ticket/${_id}`,
      {},
      {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    );

    if (result.data.status === "error") {
      dispatch(closeTicketFail(result.data.messagae));
    }

    dispatch(closeTicketSuccess(result.data.message));
    dispatch(fetchSingleTicket(_id));
    dispatch(fetchTickets());
  } catch (error) {
    if (error.message === "Request failed with status code 403") {
      const res = await refreshAccessJWT();

      res && dispatch(closeTicket(_id));

      !res && logOut();
      return;
    }

    dispatch(closeTicketFail(error.message));
  }
};
