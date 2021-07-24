import { useSelector } from "react-redux";
import { Jumbotron } from "react-bootstrap";
import "./password_reset.style.css";
import { PasswordReset } from "../../components/password_reset/PaswordReset.component";
import PasswordResetForm from "../../components/password_reset/PasswordResetForm.comp";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PasswordResetPage = () => {
  const { showReset } = useSelector((state) => state.passwordReset);

  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box form-bckgrd">
        {showReset ? <PasswordReset /> : <PasswordResetForm />}
      </Jumbotron>
    </div>
  );
};
