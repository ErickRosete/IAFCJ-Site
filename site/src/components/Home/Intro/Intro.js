import React from "react";
import "./Intro.css";
import { Player, ControlBar } from "video-react";
import { Button } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';

import "../../../../node_modules/video-react/dist/video-react.css";
import introVideo from "../../../assets/videos/main.mp4";

const intro = () => {
  return (
    <div className="home__intro">
      <div className="home__intro-container">
        <Player autoPlay loop muted playsInline fluid>
          <source src={introVideo} />
          <ControlBar disableCompletely />
        </Player>
        <div className="home__intro-cover" />
        <h1 className="home__intro-title">
          Iglesia Apostólica de la Fé en Cristo Jesus
        </h1>
        <div className="home__intro-time">
          <h2>Viernes 7:30 pm</h2>
          <h2>Domingos 2:00pm</h2>
        </div>
        <Link smooth className="home__intro-location" to="/inicio#ubicacion">
          <Button variant="primary">Ubicaciones</Button>
        </Link>
      </div>
    </div>
  );
};

export default intro;
