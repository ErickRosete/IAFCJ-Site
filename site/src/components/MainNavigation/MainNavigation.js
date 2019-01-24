import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const mainNavigation = () => {
  return (
    <header className="main-navigation">
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/conocenos">
              <NavItem>Conocenos</NavItem>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default mainNavigation;
