import React, { Component } from 'react'
import {
    Form,
    Row,
    Col,
    Button,
    Container
} from "react-bootstrap";

import "./Contact.css";

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.nameEl = React.createRef();
        this.emailEl = React.createRef();
        this.phoneEl = React.createRef();
        this.topicEl = React.createRef();
        this.bodyEl = React.createRef();
    }

    submitHandler = event => {
        event.preventDefault();
        const name = this.nameEl.current.value;
        const email = this.emailEl.current.value;
        const phone = this.phoneEl.current.value;
        const topic = this.topicEl.current.value;
        const body = this.bodyEl.current.value;

        //validation
        if (email.trim().length === 0 || body.trim().length === 0) {
            return;
        }

        const requestBody = {
            name,
            email,
            phone,
            topic,
            body,
        };

        fetch("http://localhost:8000/sendEmail", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.status !== 200 && res.status !== 201) {
                    throw new Error("Failed!");
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
            })
            .catch(err => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="home__contact">
                <div className="home__contact-banner" />
                <div className="home__contact-form">
                    <h1 className="title">Contacto</h1>
                    <Form onSubmit={this.submitHandler}>
                        <Container fluid>
                            <Row>
                                <Col xs={12} md={6}>
                                    <Form.Group as={Row} controlId="contact-name">
                                        <Form.Label column className="required" xs={4}>
                                            Nombre
                                    </Form.Label>
                                        <Col xs={8}>
                                            <Form.Control
                                                plaintext
                                                required
                                                type="text"
                                                placeholder="Jose Perez"
                                                ref={this.nameEl} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="contact-email">
                                        <Form.Label column className="required" xs={4}>
                                            Correo electrónico
                                        </Form.Label>
                                        <Col xs={8}>
                                            <Form.Control
                                                plaintext
                                                required
                                                type="email"
                                                placeholder="jose.perez@hotmail.com"
                                                ref={this.emailEl}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="contact-phone">
                                        <Form.Label column xs={4}>
                                            Teléfono
                                        </Form.Label>
                                        <Col xs={8}>
                                            <Form.Control
                                                plaintext
                                                type="tel"
                                                placeholder="6531074537"
                                                ref={this.phoneEl} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="contact-topic">
                                        <Form.Label column className="required" xs={4}>
                                            Tema
                                        </Form.Label>
                                        <Col xs={8}>
                                            <Form.Control
                                                plaintext
                                                required
                                                ref={this.topicEl}
                                                as="select">
                                                <option>Dudas Generales</option>
                                                <option>Consejos</option>
                                                <option>Problemas con el sitio</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={6}>
                                    <Form.Group controlId="contact-textarea">
                                        <Form.Label className="required">Preguntas o comentarios</Form.Label>
                                        <Form.Control
                                            required
                                            className="home__contact-textarea"
                                            componentClass="textarea"
                                            placeholder="Tengo una duda sobre ..."
                                            ref={this.bodyEl} />
                                    </Form.Group>

                                    <Button type="submit" bsStyle="primary">
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </div>
            </div >
        );
    }
}

export default Contact
