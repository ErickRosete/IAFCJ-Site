import React from "react";
import {
  Grid,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="home__contact">
      <div className="home__contact-banner" />

      <div className="home__contact-form">
        <h1 className="title">Contacto</h1>
        <Form horizontal>
          <Grid fluid>
            <Row>
              <Col xs={12} md={6}>
                <FormGroup controlId="contact-name">
                  <Col componentClass={ControlLabel} className="required" xs={4}>
                    Nombre
                  </Col>
                  <Col xs={8}>
                    <FormControl type="text" placeholder="Jose Perez" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="contact-email">
                  <Col componentClass={ControlLabel} className="required"  xs={4}>
                    correo electrónico
                  </Col>
                  <Col xs={8}>
                    <FormControl
                      type="text"
                      placeholder="jose.perez@hotmail.com"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="contact-phone">
                  <Col componentClass={ControlLabel} xs={4}>
                    telefono
                  </Col>
                  <Col xs={8}>
                    <FormControl type="tel" placeholder="6531074537" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="contact-topic">
                  <Col componentClass={ControlLabel} className="required" xs={4}>
                    Tema
                  </Col>
                  <Col xs={8}>
                    <FormControl type="text" placeholder="Consejos" />
                  </Col>
                </FormGroup>
              </Col>
              <Col xs={12} md={6}>
                <FormGroup controlId="contact-textarea">
                  <ControlLabel>Preguntas o comentarios</ControlLabel>
                  <FormControl
                    className="home__contact-textarea"
                    componentClass="textarea"
                    placeholder="Tengo una duda sobre ..."
                  />
                </FormGroup>

                <Button type="submit" bsStyle="primary">
                  Enviar
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
