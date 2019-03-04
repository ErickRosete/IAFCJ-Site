import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MainNavigation.css";

const mainNavigation = props => {
  return (
    <header className="main-navigation">
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="md"
        variant="dark"
        style={{ backgroundColor: props.navbarColor }}
      >
        <Navbar.Brand as={NavLink} to="/inicio">
          <FontAwesomeIcon icon="home" size="lg" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Soy nuevo" id="nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/nuevo">Empieza aquí</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/conocenos">
                Quienes Somos
              </NavDropdown.Item>
              <NavDropdown.Item smooth as={Link} to="/inicio#contacto">
                Contacto
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/encuentra">
              Encuentra tu grupo
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/eventos">
              Eventos
            </Nav.Link>
            <Nav.Link as={NavLink} to="/videos">
              Videos
            </Nav.Link>
            {/* <LinkContainer to="/conocenos">
                <NavItem>Conócenos</NavItem>
              </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default mainNavigation;
