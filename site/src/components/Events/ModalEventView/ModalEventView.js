import React from 'react'
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import placeholder from '../../../assets/images/Events/event-800w.jpg';
import './ModalEventView.css'

const ModalEventView = (props) => {
  const startDate = props.event ? new Date(props.event.start) : new Date();
  const endDate = props.event ? new Date(props.event.end) : new Date();

  console.log(startDate);
  const day = startDate.getDate();
  const month = startDate.toLocaleString('es', { month: 'long' });
  const timeHours = startDate.getHours();
  var timeMarker = timeHours < 12 ? "am" : "pm";
  var minutes = startDate.getMinutes() < 10 ? '0' + startDate.getMinutes().toString() : startDate.getMinutes().toString();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // var endOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric'};

  const title = props.event ? props.event.title : "";
  const address = props.event ? props.event.address : "";
  const description = props.event ? props.event.description : "";
  const imageLink = props.event ? props.event.imageLink : placeholder;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-0 py-0 modal-body">
        <Container fluid className="pt-0 pb-3">
          <Row>
            <Col xs={12} md={3} className="start-date">
              <h1> {day} </h1>
              <h2> {month} </h2>
            </Col>
            <Col xs={12} md={9}>
              <h1 > {title} </h1>
              <h2 className="bg-black txt-yellow d-block"> {timeHours % 12} : {minutes} {timeMarker} </h2>
              <h3 className="bg-black txt-white" style={{ textAlign: "left" }}> {address} </h3>
            </Col>
          </Row>
        </Container>

        <Container fluid >
          <Row>
            <Col className="modal__content_description">
              <img src={imageLink} alt="Evento" className="img-fluid px-4 pb-3"></img>
              <div
                className="px-4"
                dangerouslySetInnerHTML={{
                  __html: description
                }}
              />
            </Col>
          </Row>
        </Container>

        <Container fluid className="bg-dark-grey txt-white py-3">
          <h1>Detalles</h1>
          <p> <span className="bold"> Fecha: </span>{startDate.toLocaleString('es', options)} </p>
          <p> <span className="bold"> Hora: </span> {timeHours % 12}:{minutes} {timeMarker} - {endDate.toLocaleString('es')}</p>
          <p> <span className="bold"> Ubicación: </span>{address}</p>
        </Container>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">Cerrar</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default ModalEventView;