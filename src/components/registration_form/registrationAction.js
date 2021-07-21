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
      console.log(result.data.message);
      return dispatch(registrationFailed(result.data.message));
    }

    console.log(result.data);
    dispatch(registrationSuccess(result.data.message));
  } catch (error) {
    console.log({ error });
    console.log(error.message);
    dispatch(registrationFailed(error));
  }
};
