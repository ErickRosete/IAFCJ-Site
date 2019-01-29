import React, { Component } from "react";

import Intro from "../components/Home/Intro/Intro";
import About from "../components/Home/About/About";
import Services from "../components/Home/Services/Services";
import Networks from "../components/Home/Networks/Networks";
import Contact from "../components/Home/Contact/Contact";

import "./Home.css"

export class HomePage extends Component {
  componentWillMount() {
    this.props.changeNavbarColor("rgba(0, 0, 0, 0.25)");
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    this.props.changeNavbarColor("black");
  }

  scrollHandler = () => {
    const scrollOnTop = window.scrollY < window.innerHeight - 50;
    if (scrollOnTop) {
      if (this.props.currentNavbarColor !== "rgba(0, 0, 0, 0.25)") {
        this.props.changeNavbarColor("rgba(0, 0, 0, 0.25)");
      }
    }
    else {
      if (this.props.currentNavbarColor !== "black") {
        this.props.changeNavbarColor("black");
      }
    }
  };

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
