import React, { Component } from "react";

import Intro from "../../components/Home/Intro/Intro";
import About from "../../components/Home/About/About";
import Services from "../../components/Home/Services/Services";
import Location from "../../components/Home/Location/Location";
import Networks from "../../components/Home/Networks/Networks";
import Contact from "../../containers/Contact/Contact";
import { Helmet } from "react-helmet";

import Layout from "../../components/Layout/Layout";

import "./Home.css";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.introEl = React.createRef();
  }

  state = {
    navbarColor: "rgba(0, 0, 0, 0.25)"
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    this.setState({ navbarColor: "black" });
  }

  scrollHandler = () => {
    const scrollOnTop = window.scrollY < this.introEl.current.clientHeight - 50;
    if (scrollOnTop) {
      if (this.state.navbarColor !== "rgba(0, 0, 0, 0.25)") {
        this.setState({ navbarColor: "rgba(0, 0, 0, 0.25)" });
      }
    } else {
      if (this.state.navbarColor !== "black") {
        this.setState({ navbarColor: "black" });
      }
    }
  };

  render() {
    return (
      <Layout navbarColor={this.state.navbarColor}>
        <div className="home">
          <Helmet>
            <title>2da IAFCJ San Luis</title>
            <meta
              name="description"
              content="Forma parte de una Iglesia Cristiana dentro de San Luis Rio Colorado. Somos la 2da Iglesia Apostólica de la Fé en Cristo Jesús."
            />
          </Helmet>

          <div ref={this.introEl}>
            <Intro />
          </div>
          <About />
          <Services />
          <Location />
          <Networks />
          <Contact withBanner />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
