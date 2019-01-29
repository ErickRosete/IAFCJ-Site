import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MainNavigation.css";

export class MainNavigation extends Component {
  state = {
    scrollOnTop: true
  };
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () => {
    const scrollOnTop = window.scrollY < window.innerHeight;
    if (scrollOnTop !== this.state.scrollOnTop) {
      this.setState({ scrollOnTop });
    }
  };

  render() {
    const navColor = this.state.scrollOnTop ? "rgba(0, 0, 0, 0.25)" : "black";
    return (
      <header className="main-navigation">
        <Navbar fixedTop collapseOnSelect style={{ backgroundColor: navColor }}>
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
  }
}

export default MainNavigation;
