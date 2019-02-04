import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Services.css";

import servicios320w from "../../../assets/images/landing-page/servicios-320w.jpg";
import servicios640w from "../../../assets/images/landing-page/servicios-640w.jpg";

const Services = () => {
  return (
    <Container fluid className="home__services">
      <Row>
        <Col
          sm={3}
          xs={12}
          className="home__services-list-container equal-height-col"
        >
          <h2>Servicios</h2>
          <ul>
            <li>
              <a className="selected" href="/">
                Ayuda a enfermos
              </a>
            </li>
            <li>
              <a href="/">Personas Vulnerables</a>
            </li>
            <li>
              <a href="/">Personas de la tercera edad</a>
            </li>
          </ul>
        </Col>
        <Col sm={6} xs={12} className="home__services-details">
          <h2>Ayuda a enfermos</h2>
          <p>
            En nuestra iglesia nos preocupamos por nuestra comunidad y ofrecemos
            ayuda a personas y a organizaciones de pacientes con enfermedades.
          </p>
        </Col>
        <Col sm={3} xs={12} className="home__services-img-container">
          <img
            src={servicios320w}
            srcSet={`${servicios320w} 320w, ${servicios640w} 640w`}
            alt="Service"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
