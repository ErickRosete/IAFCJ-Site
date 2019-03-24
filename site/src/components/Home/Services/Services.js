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
          sm={8}
          xs={12}
          className="home__services-list-container"
        >
          <div className="home__services-list-card">
            <div>
              <h2>Servicios</h2>
              <p>
                En nuestra iglesia nos preocupamos por nuestra comunidad y ofrecemos
                ayuda a familias Vulnerables, inmigrantes o de bajos recursos.
              </p>
            </div>

            <div className="home__services-list-container-bullets">
              <ul>
                <li>Ayuda a familias Vulnerables, inmigrantes o de bajos recursos</li>
                <li>Guía espiritual</li>
                <li>Ayuda a enfermos</li>
                <li>Asistencia a Personas de la tercera edad</li>
                <li>Consejería familiar y matrimonial</li>
              </ul>
            </div>
          </div>
        </Col>
        <Col sm={4} xs={12} className="p-0" >
          <div className="home__services-img-container">
            <img
              src={servicios320w}
              srcSet={`${servicios320w} 320w, ${servicios640w} 640w`}
              alt="Service"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
