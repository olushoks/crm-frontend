import axios from "axios";
import { getUserPending, getUserSuccess, getUserError } from "./userSlice";

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
