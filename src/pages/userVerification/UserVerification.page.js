import { Jumbotron, Spinner, Alert } from "react-bootstrap";
import "./UserVerification.style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const verifyUser = async (formData) => {
  try {
    const result = await axios.patch(
      "http://localhost:5000/v1/user/verify",
      formData
    );

    if (result.data.status === "error") {
      console.log(result.data.message);
    }

    console.log(result.data);
  } catch (error) {
    console.log({ error });
    console.log(error.message);
  }
};

export const UserVerification = () => {
  const { _id, email } = useParams();
  const formData = { _id, email };

  useEffect(() => {
    verifyUser(formData);
  }, []);

  return (
    <div className="verification-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box form-bckgrd">
          Verification page
        </Jumbotron>
      </div>
    </div>
  );
};
