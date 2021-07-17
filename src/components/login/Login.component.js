import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginPending, loginSuccess, loginError } from "./loginSlice";

export const LoginForm = ({ formSwitch }) => {
  const disptach = useDispatch();
  const { isLoading, isAuth, error } = useSelector((state) => state.login);

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

  const login = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post("http://localhost:5000/v1/user/login", {
          email,
          password,
        });
        console.log(res);
        resolve(res.data);
        if (res.data.status === "success") {
          sessionStorage.setItem("accessJWT", res.data.accessJWT);
          localStorage.setItem(
            "crmSite",
            JSON.stringify({ refreshJWT: res.data.refreshJWT })
          );
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert(`Fill out required fields to continue`);
    }
    disptach(loginPending());
    try {
      const isAuth = await login();
      if (isAuth.status === "error") {
        return disptach(loginError(isAuth.message));
      }
      if (isAuth.status === "success") {
        return disptach(loginSuccess());
      }
      console.log(isAuth);
    } catch (error) {
      disptach(loginError(error.message));
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">User Login</h1>
          <hr />
          {error && <Alert variant="danger">{error}</Alert>}
          <Form autoComplete="off" onSubmit={handleSubmit}>
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
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="enter password"
              />
            </Form.Group>
            <Button type="submit" className="form-btn">
              Login
            </Button>
            {isLoading && <Spinner variant="primary" animation="border" />}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a onClick={() => formSwitch("reset")} href="#!">
            Forgot password
          </a>
        </Col>
      </Row>
    </Container>
  );
};
