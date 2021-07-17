import { useState } from "react";
import { LoginForm } from "../../components/login/Login.component";
import { PasswordReset } from "../../components/password_reset/PaswordReset.component";
import { Jumbotron } from "react-bootstrap";
import "./entry.style.css";

export const Entry = () => {
  const [view, setView] = useState("login");

  const handleReset = (e) => {
    e.preventDefault();
  };
  const formSwitch = (form) => {
    setView(form);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box form-bckgrd">
        {view === "login" && <LoginForm formSwitch={formSwitch} />}
        {view === "reset" && (
          <PasswordReset
            // handleChange={handleChange}
            // email={email}
            handleReset={handleReset}
            formSwitch={formSwitch}
          />
        )}
      </Jumbotron>
    </div>
  );
};
