import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const PasswordReset = ({
  handleChange,
  email,
  handleReset,
  formSwitch,
}) => {
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
            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a onClick={() => formSwitch("login")} href="#!">
            Log in
          </a>
        </Col>
      </Row>
    </Container>
  );
};

PasswordReset.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  formSwitch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
