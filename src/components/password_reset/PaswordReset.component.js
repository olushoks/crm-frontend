import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

/*===================================*
        END OF IMPORTS
*===================================*/

export const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const handleReset = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Reset Password</h1>
          <hr />
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
              Reset Password
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
