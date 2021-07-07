import { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.component";
import "./entry.style.css";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert(`Fill out required fields to continue`);
    }

    // TODO call API to submit form
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        <LoginForm
          handleChange={handleChange}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        />
      </Jumbotron>
    </div>
  );
};
