import React from "react";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import poster from "../../../assets/images/landing-page/iglesia-960w.jpeg";

import logo1000w from "../../../assets/images/landing-page/logo-1000w.png";
import logo500w from "../../../assets/images/landing-page/logo-500w.png";
import logo250w from "../../../assets/images/landing-page/logo-250w.png";
import logo120w from "../../../assets/images/landing-page/logo-120w.png";

import "./Intro.css";
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
        <img
          className="home__intro-logo"
          src={logo500w}
          srcSet={`${logo120w} 120w, ${logo250w} 250w, ${logo500w} 500w, ${logo1000w} 1000w`}
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
