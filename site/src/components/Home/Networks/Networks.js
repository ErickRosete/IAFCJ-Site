import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Networks.css";

const networks = () => {
  return (
    <div>
      <div className="home__networks">
        <div className="home__networks-header">
          <h2>Ubicaciones</h2>
        </div>
        <div className="home__networks-church">
          <Grid fluid>
            <Row>
              <Col xs={12} md={8}>
                <div className="google-maps">
                  <iframe
                    width="600"
                    height="200"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Avenida%20Colima%20y%201ra.%20San%20Luis%20Rio%20Colorado%2C%20Son.&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  />
                  <a href="https://www.embedgooglemap.net" />
                </div>
              </Col>

              <Col xs={12} md={4}>
                <div class="p-4">
                  <h3>2da Iglesia Apostólica</h3>
                  <p>
                    <b>Ubicacion:</b> Avenida Colima y 1ra. San Luis Rio
                    Colorado, Son.
                  </p>
                  <p>
                    <b>Telefono:</b> 01 686 566 5791
                  </p>
                  <p>
                    <b>Pagina de fb:</b>
                    <a href="https://www.facebook.com/2da-IAFCJ-San-Luis-750368241819032/">
                      2da Iglesia Apostólica
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default networks;
