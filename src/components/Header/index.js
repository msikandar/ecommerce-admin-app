import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions/auth.action";

export default function Header(props) {
  const state = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  const renderLoggedinLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedinLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">
            Signin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top">
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {state.authenticate
              ? renderLoggedinLinks()
              : renderNonLoggedinLinks()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
