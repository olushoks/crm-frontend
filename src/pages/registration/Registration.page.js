import { Jumbotron } from "react-bootstrap";
import RegistrationForm from "../../components/registration_form/RegistrationFrom.component";
import "./registration.style.css";

export const Registration = () => {
  return (
    <div className="registration-page bg-info">
      <div className="mt-5">
        <Jumbotron className="form-box form-bckgrd">
          <RegistrationForm />
        </Jumbotron>
      </div>
    </div>
  );
};
