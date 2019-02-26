import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./FeaturedEvent.css";

const FeaturedEvent = props => {
  return (
    <div className="events__featured">
      <Container fluid>
        <Row>
          <Col xs={12} md={6}>
            <div className="events__featured-text-cont">
              <h3>Evento destacado!</h3>
              <h2 className="events__featured-title">{props.event.title}</h2>
              <p>{props.event.shortDescription}</p>
              <p>{new Date(props.event.date).toLocaleString()}</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="events__featured-img-col">
            <div className="events__featured-img-cont">
              <img src={props.event.imageLink} alt={props.event.title} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedEvent;
