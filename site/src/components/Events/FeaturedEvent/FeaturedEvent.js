import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./FeaturedEvent.css";
import fEvent400w from "../../../assets/images/Events/event-400w.jpg";
import fEvent800w from "../../../assets/images/Events/event-800w.jpg";
import fEvent1620w from "../../../assets/images/Events/event-1620w.jpg";

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
              <img
                srcSet={`${fEvent400w} 400w, ${fEvent800w} 800w, ${fEvent1620w} 1600w`}
                src={fEvent800w}
                alt="DesayunoParaDamas"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedEvent;
