import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";

import Spinner from "../../components/Spinner/Spinner";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Form extends Component {
  constructor(props) {
    super(props);

    let about = "";
    let imageLink = "";

    if (props.about) {
      about = props.about.about ? props.about.about : "";
      imageLink = props.about.imageLink ? props.about.imageLink : "";
    }

    this.state = {
      about,
      imageLink,
      uploadingImage: false
    };
  }

  changeAboutHandler = event => {
    this.setState({
      about: event.target.value
    });
  };

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    const image = event.target.files[0];
    var formData = new FormData();
    formData.append("file", image);
    formData.append("name", image.name);

    fetch(`${process.env.REACT_APP_SERVER_URL}/uploadImage`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState({ uploadingImage: false, imageLink: resData });
        console.log(resData);
      })
      .catch(err => {
        this.setState({ uploadingImage: false });
        console.log(err);
      });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const aboutString = this.state.about;
    const imageLink = this.state.imageLink
    if (aboutString === "" || imageLink === "") {
      return;
    }

    let about = {
      about: aboutString,
      imageLink
    };

    this.props.onSubmit(about);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.onSubmitHandler}>
        <Paper className={classes.root} elevation={1}>
          <h2 style={{ textAlign: 'center' }}>Sección de Quiénes Somos</h2>
          <TextField
            required
            autoFocus
            className={classes.textfield}
            multiline
            rowsMax="5"
            margin="normal"
            label="Quiénes somos"
            type="text"
            fullWidth
            value={this.state.about}
            onChange={this.changeAboutHandler}
            error={this.state.about === ""}
            helperText={
              this.state.about === "" ? "Valor Requerido" : ""
            }
          />

          <div className={classes.imagefield}>
            <input
              accept="image/*"
              onChange={this.changeImageHandler}
              className={classes.input}
              id="contained-button-file"
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                component="span"
                className={classes.button}
              >
                Subir Imagen
              </Button>
            </label>

            {this.state.imageLink && (
              <div className={classes.imgContainer}>
                {this.state.uploadingImage ? (
                  <Spinner />
                ) : (
                    <img
                      className={classes.image}
                      src={this.state.imageLink}
                      alt="about"
                    />
                  )}
              </div>
            )}
          </div>

          <Button
            className={classes.buttonCenter}
            variant="contained"
            color="primary"
            onClick={this.onSubmitHandler}
          >
            Guardar
          </Button>
        </Paper>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
