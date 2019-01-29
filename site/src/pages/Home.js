import React, { Component } from "react";
import { Grid, Col } from "react-bootstrap";

import Intro from "../components/Home/Intro/Intro";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";
import Networks from "../components/Home/Networks/Networks";
import Contact from "../components/Home/Contact/Contact";

export class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <Intro />
        <About />
        <Services />
        <Networks />
        <Contact />
      </div>
    );
  }
}

export default HomePage;
