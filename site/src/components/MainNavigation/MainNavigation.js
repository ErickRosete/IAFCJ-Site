import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MainNavigation.css";

const mainNavigation = (props) => {
  return (
    <header className="main-navigation">
      <Navbar collapseOnSelect fixed="top" expand="md" variant="dark" style={{ backgroundColor: props.navbarColor }}>
        <Navbar.Brand as={NavLink} to="/">
          <FontAwesomeIcon icon="home" size="lg" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/encuentra">Encuentra tu grupo</Nav.Link>
            <Nav.Link as={NavLink} to="/eventos">Eventos</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/videos">Videos</Nav.Link>
            <Nav.Link as={NavLink} to="/conocenos">Conócenos</Nav.Link>
            {/* <LinkContainer to="/conocenos">
                <NavItem>Conócenos</NavItem>
              </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default mainNavigation
