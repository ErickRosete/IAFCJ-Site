import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./About.css";

import baile from "../../../assets/images/landing-page/baile.jpg";
import logo from "../../../assets/images/landing-page/logo.png";

const about = () => {
  return (
    <Grid fluid className="home__about">
      <Row className="row-eq-height">
        <Col className="home__about-img-container" xsHidden sm={4} md={6}>
          <img src={baile} />
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className="home__about-info">
            <div className="home__about-title">
              <img className="home__about-logo" src={logo} height="75" />
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
    </Grid>
  );
};

export default about;
