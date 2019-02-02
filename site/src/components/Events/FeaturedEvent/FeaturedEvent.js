import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./FeaturedEvent.css";
import featuredEventImage from "../../../assets/images/Events/event1.jpg";

const FeaturedEvent = () => {
  return (
    <div className="events__featured">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="events__featured-text-cont">
              <h3>El más reciente!</h3>
              <h2 className="events__featured-title">Desayuno para damas</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className="events__featured-img-col">
            <div className="events__featured-img-cont">
              <img src={featuredEventImage} alt="DesayunoParaDamas" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedEvent;
