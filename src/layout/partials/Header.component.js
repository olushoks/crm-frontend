import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo192.png";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

/*===================================*
        END OF IMPORTS
*===================================*/

const deleteJWT = async () => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  try {
    await axios.delete("http://localhost:5000/v1/user/logout", {
      headers: {
        Authorization: accessJWT,
      },
    });
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const Header = () => {
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem("accessJWT");
    deleteJWT();
    history.push("/");
  };
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
