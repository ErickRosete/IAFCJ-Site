import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MainNavigation.css";

const mainNavigation = (props) => {
  return (
    <header className="main-navigation">
      <Navbar fluid fixedTop collapseOnSelect style={{ backgroundColor: props.navbarColor }}>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <FontAwesomeIcon icon="home" size="lg" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/encuentra">
              <NavItem>Encuentra tu grupo</NavItem>
            </LinkContainer>
            <LinkContainer to="/eventos">
              <NavItem>Eventos</NavItem>
            </LinkContainer>
            <LinkContainer to="/blog">
              <NavItem>Blog</NavItem>
            </LinkContainer>
            <LinkContainer to="/videos">
              <NavItem>Videos</NavItem>
            </LinkContainer>
            <LinkContainer to="/conocenos">
              <NavItem>Conócenos</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default mainNavigation
