import axios from "axios";
import {
  registrationFailed,
  registrationPending,
  registrationSuccess,
} from "./registrationSlice";

export const userRegistration = (formData) => async (dispatch) => {
  try {
    dispatch(registrationPending());
    const result = await axios.post("http://localhost:5000/v1/user", formData);

    if (result.data.status === "error") {
      return dispatch(registrationFailed(result.data.message));
    }

    dispatch(registrationSuccess(result.data.message));
  } catch (error) {
    dispatch(registrationFailed(error.message));
  }
};
