import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { passwordResetError } from "./passwordResetSlice";
import { resetPassword } from "./passwordResetAction";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PasswordReset = () => {
  const dispatch = useDispatch();
  let { isLoading, status, message } = useSelector(
    (state) => state.passwordReset
  );
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      dispatch(passwordResetError("Email field cannot be empty"));
      return;
    }
    dispatch(resetPassword(email));
    setEmail("");
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Reset Password</h1>
          <hr />
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
          <Form autoComplete="off" onSubmit={handleReset}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="enter email"
              />
            </Form.Group>
            <Button type="submit" className="form-btn">
              Resest Password{" "}
              {isLoading && <Spinner variant="info" animation="border" />}
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="/">Log in</a>
        </Col>
      </Row>
    </Container>
  );
};
