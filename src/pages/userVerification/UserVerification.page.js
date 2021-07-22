import { Jumbotron, Spinner, Alert } from "react-bootstrap";
import "./UserVerification.style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const verifyUser = async (formData) => {
  try {
    const result = await axios.patch(
      "http://localhost:5000/v1/user/verify",
      formData
    );

    return result.data;
  } catch (error) {
    console.log(error.message);
    return { status: "error", message: error.message };
  }
};

const initialState = {
  status: "",
  message: "",
};

export const UserVerification = () => {
  const { _id, email } = useParams();
  // const formData = { _id, email };

  const [response, setResponse] = useState(initialState);

  useEffect(() => {
    const apiCall = async () => {
      const res = await verifyUser({ _id, email });
      setResponse(res);
    };

    !response.status && apiCall();
  }, [response]);

  return (
    <div className="verification-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box form-bckgrd">
          {!response.status && <Spinner variant="info" animation="border" />}
          {response.status && (
            <Alert
              variant={response.status === "success" ? "success" : "danger"}
            >
              {response.message}
            </Alert>
          )}
        </Jumbotron>
      </div>
    </div>
  );
};
