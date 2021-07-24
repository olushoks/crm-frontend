import { useState, useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "./passwordResetAction";

/*===================================*
        END OF IMPORTS
*===================================*/

const initialState = {
  password: "Aa@123456",
  confirmPwd: "Aa@123456",
  otp: "",
};

const pwdVerification = {
  hasMin8xters: false,
  containsUpCase: false,
  containsLowCase: false,
  containsNum: false,
  containsSpecialxter: false,
  pwdMatch: false,
};

const PasswordResetForm = () => {
  const [user, setUser] = useState(initialState);
  const [pwdError, setPwdError] = useState(pwdVerification);

  const dispatch = useDispatch();
  const { isLoading, status, message, email } = useSelector(
    (state) => state.passwordReset
  );

  useEffect(() => {}, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });

    if (name === "password") {
      const hasMin8xters = value.length >= 8;
      const containsUpCase = /[A-Z]/.test(value);
      const containsLowCase = /[a-z]/.test(value);
      const containsNum = /[0-9]/.test(value);
      const containsSpecialxter = /[@, *, %, $, &]/.test(value);

      setPwdError({
        ...pwdError,
        hasMin8xters,
        containsUpCase,
        containsLowCase,
        containsNum,
        containsSpecialxter,
      });
    }

    if (name === "confirmPwd") {
      const pwdMatch = user.password === value;
      setPwdError({ ...pwdError, pwdMatch });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { otp, password } = user;

    const userObj = {
      pin: otp,
      email,
      newPassword: password,
    };

    dispatch(updatePassword(userObj));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Password Reset</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="number"
                name="otp"
                value={user.otp}
                onChange={handleChange}
                placeholder="Enter OTP"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPwd"
                value={user.confirmPwd}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Text>
              {!pwdError.pwdMatch && user.confirmPwd && (
                <div className="text-danger mb-3">Password do not match</div>
              )}
            </Form.Text>
            <ul className="mt-4">
              <li
                className={
                  pwdError.hasMin8xters ? "text-success" : "text-danger"
                }
              >
                Min 8 characters
              </li>
              <li
                className={
                  pwdError.containsUpCase ? "text-success" : "text-danger"
                }
              >
                At least one uppercase
              </li>
              <li
                className={
                  pwdError.containsLowCase ? "text-success" : "text-danger"
                }
              >
                At least one lowercase
              </li>
              <li
                className={
                  pwdError.containsNum ? "text-success" : "text-danger"
                }
              >
                At least one number
              </li>
              <li
                className={
                  pwdError.containsSpecialxter ? "text-success" : "text-danger"
                }
              >
                At least one of these specials characters: @ * % $ &
              </li>
            </ul>

            <Button
              variant="primary"
              type="submit"
              disabled={Object.values(pwdError).includes(false)}
            >
              Submit
            </Button>
            {isLoading && <Spinner variant="info" animation="border" />}
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          Back to login <a href="/">Login now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordResetForm;
