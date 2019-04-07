import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Mutation } from "react-apollo";
import "./Newsletter.css";
import { ADD_NEWSLETTER_EMAIL } from "./constants";
import Alert from "react-bootstrap/Alert";

export class Newsletter extends Component {
  state = {
    showAlert: false,
    email: ""
  };

  emailHandler = event => {
    this.setState({
      email: event.target.value
    });
  };

  showAlertHandler = () => {
    this.setState({ showAlert: true, email: "" });
    setTimeout(this.hideAlertHandler, 1500);
  };

  hideAlertHandler = () => {
    this.setState({ showAlert: false });
  };

  render() {
    return (
      <div id="newsletter" className="newsletter">
        <h1>Suscribete a nuestro newsletter</h1>
        <p className="txt-white">Recibirás la información más importante de las actividades de nuestra congregación en tu correo electrónico!</p>
        <Mutation mutation={ADD_NEWSLETTER_EMAIL}>
          {createNewsletterEmail => (
            <Form
              className="newsletter__form"
              onSubmit={event => {
                event.preventDefault();
                if (this.state.email === "") return;
                createNewsletterEmail({
                  variables: { email: this.state.email }
                });
                this.showAlertHandler();
              }}
            >
              <Form.Control
                type="email"
                onChange={this.emailHandler}
                value={this.state.email}
                plaintext
                required
                placeholder="Ingresa tu correo electrónico"
              />
              <Button type="submit" variant="primary">
                Suscribir!
              </Button>
            </Form>
          )}
        </Mutation>
        {this.state.showAlert && (
          <Alert
            dismissible
            onClose={this.hideAlertHandler}
            className="newsletter__alert"
            variant="success"
          >
            Correo electronico añadido correctamente
          </Alert>
        )}
      </div>
    );
  }
}

export default Newsletter;
