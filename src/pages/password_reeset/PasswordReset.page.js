import { useState } from "react";
import { PasswordReset } from "../../components/password_reset/PaswordReset.component";
import { Jumbotron } from "react-bootstrap";
import "./password_reset.style.css";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PasswordResetPage = () => {
  const [view, setView] = useState("login");

  const formSwitch = (form) => {
    setView(form);
  };

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box form-bckgrd">
        <PasswordReset />
      </Jumbotron>
    </div>
  );
};
