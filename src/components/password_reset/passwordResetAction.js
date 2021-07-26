import axios from "axios";
import {
  passwordResetPending,
  passwordResetError,
  passwordResetSuccess,
  updatePasswordSuccess,
} from "./passwordResetSlice";

/*===================================*
        END OF IMPORTS
*===================================*/

export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch(passwordResetPending());

    const result = await axios.post(
      "http://localhost:5000/v1/user/reset-password",
      { email }
    );

    if (result.data.status === "success") {
      const message = result.data.message;
      return dispatch(passwordResetSuccess({ message, email }));
    }

    dispatch(passwordResetError(result.data.message));
  } catch (error) {
    dispatch(passwordResetError(error.message));
  }
};

export const updatePassword = (userObj) => async (dispatch) => {
  try {
    dispatch(passwordResetPending());

    const result = await axios.patch(
      "http://localhost:5000/v1/user/reset-password",
      userObj
    );

    if (result.data.status === "success") {
      return dispatch(updatePasswordSuccess(result.data.message));
    }

    dispatch(passwordResetError(result.data.message));
  } catch (error) {
    dispatch(passwordResetError(error.message));
  }
};
