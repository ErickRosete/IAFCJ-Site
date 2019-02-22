import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

import Button from "react-bootstrap/Button";
import Link from "react-router-dom/Link";

import baile1620w from "../../../assets/images/landing-page/baile-1620w.jpg";
import baile800w from "../../../assets/images/landing-page/baile-800w.jpg";
import baile400w from "../../../assets/images/landing-page/baile-400w.jpg";

import logo500w from "../../../assets/images/logos/logo-500w.png";
import logo250w from "../../../assets/images/logos/logo-250w.png";
import logo120w from "../../../assets/images/logos/logo-120w.png";

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
                Somos una iglesia sana, vivificada en el Espiritu Santo,
                fundamentada en apóstoles y profetas, siendo la principal piedra
                del ángulo JESUCRISTO mismo, con la mision de llevar el
                evangelio a toda persona, ejercitándonos en el amor y las buenas
                obras, sirviendo a Dios en Santidad.
              </p>
            </div>
            <Link to="/conocenos">
              <Button variant="primary">Conócenos</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default about;
