import "./Navigation.css";
import React from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "./Logo";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand as={Link} to="/" style={{ width: "2rem" }}>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to="/subpage">
              Tasks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
