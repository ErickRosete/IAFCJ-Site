import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Networks.css";
import jovenes from "../../../assets/images/landing-page/jovenes.jpg";
import señores from "../../../assets/images/landing-page/señores.jpg";
import damas from "../../../assets/images/landing-page/damas.jpg";

const networks = () => {
  return (
    <div className="home__networks">
      <Container fluid className="home__networks-list">
        <Row>
          <Col xs={12} md={4} className="p-md-0">
            <div className="home__networks-leader">
              <div className="home__networks-img-containers">
                <img src={damas} alt="lider-damas" />
              </div>
              <div className="home__networks-leader-info">
                <h3>Lider de Damas</h3>
                <p>Ma. Teresa Leyva Huizar</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="p-md-0">
            <div className="home__networks-leader">
              <div className="home__networks-img-containers">
                <img src={señores} alt="lider-señores" />
              </div>
              <div className="home__networks-leader-info">
                <h3>Lider de Señores</h3>
                <p>Visente Perez</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="p-md-0">
            <div className="home__networks-leader">
              <div className="home__networks-img-containers">
                <img src={jovenes} alt="lider-jovenes" />
              </div>
              <div className="home__networks-leader-info">
                <h3>Lider de Jóvenes</h3>
                <p>Cirilo Baez</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="home__networks-info">
        <h2>Líderes de red</h2>
        <p>Todos son bienvenidos gratuitamente a nuestros grupos celulares</p>
      </div>
    </div>
  );
};

export default networks;
