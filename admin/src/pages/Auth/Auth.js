import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";

import AuthContext from "../../context/auth-context";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import logo120w from "../../assets/images/logos/logo-120w.png";
import logo250w from "../../assets/images/logos/logo-250w.png";
import logo500w from "../../assets/images/logos/logo-500w.png";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles, LOGIN } from "./constants";
import { withApollo } from "react-apollo";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class AuthPage extends Component {
  state = {
    email: "",
    password: "",
    error: false,
    showPassword: false
  };

  static contextType = AuthContext;

  changeHandler = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  submitHandler = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    if (email === "" || password === "") {
      return;
    }

    this.props.client
      .query({
        query: LOGIN,
        variables: { email, password }
      })
      .then(resData => {
        console.log(resData);
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration,
            resData.data.login.role
          );
        }
      })
      .catch(err => {
        this.setState({ error: true });
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.authRoot}>
        <form className={classes.authForm} onSubmit={this.submitHandler}>
          <div className={classes.title}>
            <img
              height="100"
              src={logo250w}
              srcSet={`${logo120w} 120w, ${logo250w} 250w, ${logo500w} 500w`}
              alt="IAFCJ-Logo"
            />
            <Typography variant="h3" color="inherit">
              IAFCJ
            </Typography>
          </div>

          <TextField
            required
            autoFocus
            margin="normal"
            label="Correo electrónico"
            type="text"
            fullWidth
            value={this.state.email}
            onChange={this.changeHandler.bind(this, "email")}
            error={this.state.error}
          />

          <TextField
            required
            autoFocus
            margin="normal"
            label="Contraseña"
            type={this.state.showPassword ? "text" : "password"}
            fullWidth
            value={this.state.password}
            error={this.state.error}
            helperText={this.state.error ? "Usuario o contraseña inválida" : ""}
            onChange={this.changeHandler.bind(this, "password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={this.handleClickShowPassword}
                  >
                    {this.state.showPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            className={classes.button}
            type="submit"
            color="primary"
            variant="contained"
            autoFocus
          >
            Iniciar Sesión
          </Button>
        </form>
      </div>
    );
  }
}

AuthPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withApollo(withStyles(styles)(AuthPage));
