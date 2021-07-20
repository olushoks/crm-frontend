import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  company: "",
  password: "",
  confirmPwd: "",
};

const pwdVerification = {
  hasMin8xters: false,
  containsUpCase: false,
  containsLowCase: false,
  containsNum: false,
  containsSpecialxter: false,
  pwdMatch: false,
};

const RegistrationForm = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [pwdError, setPwdError] = useState(pwdVerification);

  useEffect(() => {}, [newUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });

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
      const pwdMatch = newUser.password === value;
      setPwdError({ ...pwdError, pwdMatch });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">User Registration</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                placeholder="[First Name] [Last Name]"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={newUser.company}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={newUser.address}
                onChange={handleChange}
                placeholder="Full Address"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPwd"
                value={newUser.confirmPwd}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Form.Text>
              {!pwdError.pwdMatch && newUser.confirmPwd && (
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
          </Form>
        </Col>
      </Row>
      <Row className="py-4">
        <Col>
          Already have an account? <a href="/">Login now</a>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
