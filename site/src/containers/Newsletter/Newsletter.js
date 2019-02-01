import React, { Component } from 'react'
import { Button, Form } from "react-bootstrap";
import "./Newsletter.css"

export class Newsletter extends Component {

    constructor(props) {
        super(props);
        this.emailEl = React.createRef();
    }

    submitHandler = event => {
        event.preventDefault();
        const email = this.emailEl.current.value;

        //validation
        if (email.trim().length === 0) {
            return;
        }

        const requestBody = {
            email,
        };

        console.log(requestBody);

        // fetch("http://localhost:8000/sendEmail", {
        //     method: "POST",
        //     body: JSON.stringify(requestBody),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then(res => {
        //         if (res.status !== 200 && res.status !== 201) {
        //             throw new Error("Failed!");
        //         }
        //         return res.json();
        //     })
        //     .then(resData => {
        //         console.log(resData);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    };

    render() {
        return (
            <div className="newsletter">
                <h1>
                    Suscribete a nuestro newsletter
                </h1>
                <Form onSubmit={this.submitHandler} className="newsletter__form">
                    <Form.Control type="email"
                        ref={this.emailEl}
                        plaintext
                        required
                        placeholder="Ingresa tu correo electrónico" />
                    <Button type="submit" variant="primary">Suscribir!</Button>
                </Form>
            </div>
        )
    }
}

export default Newsletter
