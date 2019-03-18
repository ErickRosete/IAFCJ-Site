import React from 'react'
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import placeholder from '../../../assets/images/Events/event-800w.jpg';
import './ModalEventView.css'

const ModalEventView = (props) => {
  console.log(props.event)
  const startDate = props.event ? new Date(props.event.start) : new Date();
  const endDate = props.event ? new Date(props.event.end) : new Date();

  const day = startDate.getDate();
  const month = startDate.toLocaleString('es', { month: 'long' });
  const timeHours = startDate.getHours();
  var timeMarker = timeHours % 12 < 1 ? "am" : "pm";
  var minutes = startDate.getMinutes() < 10 ? '0' + startDate.getMinutes().toString() : startDate.getMinutes().toString();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  // var endOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric'};

  const title = props.event ? props.event.title : "";
  const address = props.event ? props.event.address : "";

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

      <Modal.Body className="px-0 py-0">
        <Container fluid className="pt-0 pb-3">
          <Row>
            <Col xs={12} md={3} className="start-date">
              <h1> {day} </h1>
              <h2> {month} </h2>
            </Col>
            <Col xs={12} md={9}>
              <h1 > {title} </h1>
              <div className="">
              <h2 className="bg-black txt-yellow d-block"> {timeHours%12} : {minutes} {timeMarker} </h2>
              </div>
              <h3 className="bg-black txt-white"> {address} </h3>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <img src={placeholder} alt="Evento" className="img-fluid px-4 pb-3"></img>
          <p className="px-4">
            esta es la descripcion de la imagen (:
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Container>

        <Container fluid className="bg-dark-grey txt-white py-3">
        <h1>Detalles</h1>
        <p> <div className="bold"> Fecha: </div>{startDate.toLocaleString('es',options)} </p>
        <p> <div className="bold"> Hora: </div> {timeHours%12}:{minutes} {timeMarker} - {endDate.toLocaleString('es')}</p>
        <p> <div className="bold"> Ubicación: </div>{address}</p>
        <Button> Añadir a calendario de google </Button>
        </Container>
      </Modal.Body>
      
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger">Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEventView;