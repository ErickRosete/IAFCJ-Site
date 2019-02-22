import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Location.css";
import Map from "../../Map/Map";

const networks = () => {
  return (
    <div id="ubicacion" className="home__location">
      <div className="home__location-header">
        <h2>Ubicación</h2>
      </div>
      <div className="home__location-church">
        <Container fluid>
          <Row>
            <Col xs={12} md={8}>
              <Map coords={{lat: 32.442408, lng:  -114.743104}}/>
            </Col>

            <Col xs={12} md={4}>
              <div className="p-4">
                <h3>2da Iglesia Apostólica</h3>
                <p>
                  <b>Ubicacion:</b> Avenida Colima y 1ra. San Luis Rio Colorado,
                  Son.
                </p>
                <p>
                  <b>Telefono:</b> 01 686 566 5791
                </p>
                <p>
                  <b>Pagina de fb:</b>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/2da-IAFCJ-San-Luis-750368241819032/"
                  >
                    2da Iglesia Apostólica
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default networks;
