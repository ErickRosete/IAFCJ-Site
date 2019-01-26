import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import AuthContext from "../../context/auth-context";

import logo from "../../assets/images/landing-page/logo.png";
import "./Auth.css";

class AuthPage extends Component {
  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#3a019a";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    const requestBody = {
      query: `
        {
          login(userInput:{email:"${email}", password:"${password}"}){
            userId
            token
            tokenExpiration
          }
        }
        `
    };

    fetch("http://localhost:8000/graphql", {
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
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="auth-body">
        <form className="auth-form" onSubmit={this.submitHandler}>
          <div className="auth-form__title">
            <img height="100" src={logo} alt="IAFCJ" />
            <Typography variant="h3" color="inherit">
              IAFCJ
            </Typography>
          </div>
          <div className="form-control">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" ref={this.emailEl} />
          </div>
          <div className="form-control">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" ref={this.passwordEl} />
          </div>
          <div className="form-actions">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthPage;
