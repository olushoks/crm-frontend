import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.component";
import "./entry.style.css";

export const Entry = () => {
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm />
      </Jumbotron>
    </div>
  );
};
