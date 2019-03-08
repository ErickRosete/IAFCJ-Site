import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./FeaturedEvent.css";

const FeaturedEvent = props => {
  const startDate = new Date(props.event.startDate);
  const day = startDate.getDay();
  const month = startDate.toLocaleString('es', { month: 'long' });
  const timeHours=startDate.getHours();
  var timeMarker =timeMarker%12<1?"am":"pm";
  var minutes= startDate.getMinutes()<10?'0'+startDate.getMinutes().toString():startDate.getMinutes().toString();

  return (
    <div className="events__featured">
      <Container fluid>
        <div className="events__featured-text-cont">
          <h3>Evento destacado!</h3>
        </div>
        <Row>
          <Col xs={12} md={6}>
            <div className="events__featured-text-cont">
              <h2 className="events__featured-title">{props.event.title}</h2>
              <p className="date">{new Date(props.event.startDate).toDateString()}</p>
              <p>{props.event.shortDescription}</p>
            </div>
          </Col>
          <Col xs={12} md={6} className="events__featured-img-col">
            <div className="events__featured-img-cont">
              <div className="events__featured-date">
                <div style={{ display: 'block', marginLeft: 'auto' }}>
                  <div className="events__featured-day">{day}</div>
                  <div className="events__featured-month"> {month} </div>
                </div>
                <div className="events__featured-time">
                  {timeHours%12} : {minutes} {timeMarker}
                </div>
              </div>

              <div className="events__featured-address"> {props.event.address} </div>
              <img src={props.event.imageLink} alt={props.event.title} />
              <hr />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedEvent;
