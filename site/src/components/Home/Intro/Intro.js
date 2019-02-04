import React from "react";
import "./Intro.css";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import poster from "../../../assets/images/landing-page/iglesia-frente.jpeg";
import logo from "../../../assets/images/landing-page/logo.png";

import introVideo from "../../../assets/videos/main.mp4";

const intro = () => {
  return (
    <div className="home__intro">
      <div className="home__intro-container">
        <ReactPlayer
          url={introVideo}
          config={{
            file: {
              attributes: { poster: poster }
            }
          }}
          width="100%"
          height="100%"
          playing
          loop
          muted
        />
        <div className="home__intro-cover" />
        <img className="home__intro-logo" src={logo} alt="main-logo"/>
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
          <Link smooth className="home__intro-location" to="/inicio#ubicacion">
            <Button variant="primary">
              <h3>Como llegar</h3>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default intro;
