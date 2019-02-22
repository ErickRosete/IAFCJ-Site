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
          className="home__services-list-container"
        >
          <h2>Servicios</h2>
          <ul>
            <li className="selected">Consejería familiar y matrimonial</li>
            <li>Guía espiritual</li>
            <li>Ayuda a enfermos</li>
            <li>
              Ayuda a familias Vulnerables, inmigrantes o de bajos recursos.
            </li>
            <li>Asistencia a Personas de la tercera edad</li>
          </ul>
        </Col>
        <Col sm={6} xs={12} className="home__services-details">
          <h2>Ayuda a familias Vulnerables</h2>
          <p>
            En nuestra iglesia nos preocupamos por nuestra comunidad y ofrecemos
            ayuda a familias Vulnerables, inmigrantes o de bajos recursos.
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
