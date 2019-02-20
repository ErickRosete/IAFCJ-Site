import React from "react";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import main2000w from "../../../assets/images/landing-page/main-2000w.jpg";
import main1000w from "../../../assets/images/landing-page/main-1000w.jpg";
import main500w from "../../../assets/images/landing-page/main-500w.jpg";

import logobgw1000w from "../../../assets/images/logos/logo-bgw-1000w.png";
import logobgw500w from "../../../assets/images/logos/logo-bgw-500w.png";
import logobgw250w from "../../../assets/images/logos/logo-bgw-250w.png";
import logobgw120w from "../../../assets/images/logos/logo-bgw-120w.png";

import "./Intro.css";

const intro = () => {
  return (
    <div className="home__intro">
      <div className="home__intro-container">
        <img
          className="home__intro-main"
          src={main1000w}
          srcSet={`${main2000w} 2000w, ${main1000w} 1000w, ${main500w} 500w`}
          alt="main-bg"
        />
        <div className="home__intro-cover" />
        <img
          className="home__intro-logo"
          src={logobgw500w}
          srcSet={`${logobgw120w} 120w, ${logobgw250w} 250w, ${logobgw500w} 500w, ${logobgw1000w} 1000w`}
          alt="main-logo"
        />
        <div className="home__intro-text">
          <h1 className="home__intro-title">
            Tenemos un lugar reservado <div className="text-white">para tí</div>
          </h1>
          <div className="home__intro-time">
            <h2>
              Viernes <div className="text-white">7:30 pm</div>
            </h2>
            <h2>
              Domingos <div className="text-white">2:00pm</div>
            </h2>
          </div>
          <div className="home__intro-action-bar">
            <Link smooth to="/inicio#ubicacion">
              <Button variant="primary">
                <h3>Visítanos</h3>
              </Button>
            </Link>
            <Link to="/nuevo">
              <Button variant="primary">
                <h3>Soy nuevo</h3>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default intro;
