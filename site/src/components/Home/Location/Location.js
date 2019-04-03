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
                  <b >Ubicacion: </b> 
                  <a href="https://www.google.com.mx/maps/place/Iglesia+Cristiana+2da+IAFCJ+San+Luis/@32.457334,-114.7956758,17z/data=!3m1!4b1!4m5!3m4!1s0x80d64f3d056e963d:0xb219c030a572e34f!8m2!3d32.457334!4d-114.7934871"
                     target="_blank"
                     rel="noopener noreferrer">
                    Avenida Colima y 1ra. San Luis Rio Colorado,
                    Son.
                  </a>
                </p>
                <p>
                  <b>Telefono:</b> 653 5349 108
                </p>
                <p>
                  <b>Pagina de fb: </b>
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
