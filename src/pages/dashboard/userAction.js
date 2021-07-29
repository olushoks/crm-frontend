import axios from "axios";
import { getUserPending, getUserSuccess, getUserError } from "./userSlice";
import {
  fetchTicketSuccess,
  filterTickets,
  fetchSingleTicketSuccess,
  resetAlert,
} from "../../pages/ticket_list/ticketSlice";
import { logOutUser } from "../../components/login/loginSlice";

/*===================================*
        END OF IMPORTS
*===================================*/

const fetchUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");

      if (!accessJWT) {
        reject("Token not found");
      }

      const res = await axios.get("http://localhost:5000/v1/user", {
        headers: {
          Authorization: accessJWT,
        },
      });
      resolve(res.data);
    } catch (error) {
      reject(error.message);
    }
  });
};

export const getUserProfile = () => async (dispatch) => {
  try {
    dispatch(getUserPending());

    const result = await fetchUser();

    if (result.user && result.user._id) {
      return dispatch(getUserSuccess(result.user));
    }

    dispatch(getUserError("User is not found"));
  } catch (error) {
    dispatch(getUserError(error.message));
  }
};

export const refreshAccessJWT = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

      if (!refreshJWT) {
        reject(false);
      }

      const res = await axios.get(
        "http://localhost:5000/v1/token/new-access-jwt",
        {
          headers: {
            Authorization: refreshJWT,
          },
        }
      );

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        resolve(true);
      }
    } catch (error) {
      if (error.message === "Request failed with status code 403") {
        localStorage.removeItem("crmSite");
        console.log("refresh REJECT");
      }
      reject(false);
    }
  });
};

export const logOut = (deleteJWT) => async (dispatch) => {
  deleteJWT();
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("crmSite");
  // RESET STATE TO INITIAL VALUES UPON LOGOUT
  dispatch(logOutUser());
  dispatch(fetchTicketSuccess([]));
  dispatch(filterTickets([]));
  dispatch(fetchSingleTicketSuccess({}));
  dispatch(getUserSuccess({}));
  dispatch(resetAlert());
};
