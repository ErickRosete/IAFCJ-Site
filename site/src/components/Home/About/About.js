import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import baile1620w from "../../../assets/images/landing-page/baile-1620w.jpg";
import baile800w from "../../../assets/images/landing-page/baile-800w.jpg";
import baile400w from "../../../assets/images/landing-page/baile-400w.jpg";

import logo500w from "../../../assets/images/landing-page/logo-500w.png";
import logo250w from "../../../assets/images/landing-page/logo-250w.png";
import logo120w from "../../../assets/images/landing-page/logo-120w.png";

const about = () => {
  return (
    <Container fluid className="home__about">
      <Row>
        <Col
          className="home__about-img-container d-none d-sm-block"
          sm={4}
          md={6}
        >
          <img
            src={baile800w}
            srcSet={`${baile400w} 400w, ${baile800w} 800w, ${baile1620w} 1620w`}
            alt="about"
          />
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="home__about-info">
            <div className="home__about-title">
              <img
                className="home__about-logo"
                src={logo250w}
                srcSet={`${logo120w} 120w, ${logo250w} 250w, ${logo500w} 500w`}
                alt="logo"
              />
              <h2>Quiénes Somos</h2>
            </div>
            <div className="home__about-text">
              <p>
                Somos una congregación de 7 iglesias ubicadas en san luis rio
                colorado comprometidas con ayudar a quienes lo necesiten
              </p>
              <p>
                "Eramos gente que andaba en la oscuridad... hasta que hubo
                esperanza, hubo fe, hubo la promesa del Salvador. Dios amó tanto
                que nos envió a su único hijo."
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default about;
