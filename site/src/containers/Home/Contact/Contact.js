import React, { Component } from 'react'
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

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
        this.bodyEl = React.createRef();
    }

    submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;
        const body = this.bodyEl.current.value;
        console.log(email, body);

        if (email.trim().length === 0 || body.trim().length === 0) {
            return;
        }

        const requestBody = {
            query: `
            {
                "email":"${email}",
                "body":"${body}"
            }
            `
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
                    <Form horizontal onSubmit={this.submitHandler}>
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
                                        <Col componentClass={ControlLabel} className="required" xs={4}>
                                            correo electrónico
                                        </Col>
                                        <Col xs={8}>
                                            <FormControl
                                                type="email"
                                                placeholder="jose.perez@hotmail.com"
                                                inputRef={this.emailEl} 
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
                                            inputRef={this.bodyEl} />
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
    }
}

export default Contact
