import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";

import Spinner from "../../components/Spinner/Spinner";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { EDIT_INTRO } from "../../pages/Intro/constants";
import Mutation from "react-apollo/Mutation";

export class Form extends Component {
  constructor(props) {
    super(props);

    let attentionSchedule = "";
    let imageLink = "";

    if (props.intro) {
      attentionSchedule = props.intro.attentionSchedule
        ? props.intro.attentionSchedule
        : "";
      imageLink = props.intro.imageLink ? props.intro.imageLink : "";
    }

    this.state = {
      attentionSchedule,
      imageLink,
      uploadingImage: false
    };
  }

  changeAttentionScheduleHandler = event => {
    this.setState({
      attentionSchedule: event.target.value
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

    const attentionSchedule = this.state.attentionSchedule;
    if (attentionSchedule === "") {
      return;
    }

    let intro = {
      attentionSchedule,
      imageLink: this.state.imageLink
    };

    this.props.onSubmit(intro);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.onSubmitHandler}>
        <Paper className={classes.root} elevation={1}>
          <TextField
            required
            autoFocus
            className={classes.textfield}
            multiline
            rowsMax="3"
            margin="normal"
            label="Horario de atención"
            type="text"
            fullWidth
            value={this.state.attentionSchedule}
            onChange={this.changeAttentionScheduleHandler}
            error={this.state.attentionSchedule === ""}
            helperText={
              this.state.attentionSchedule === "" ? "Valor Requerido" : ""
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
                    alt="intro-background"
                  />
                )}
              </div>
            )}
          </div>
          <Mutation mutation={EDIT_INTRO}>
            {updateIntro => (
              <Button
                className={classes.buttonCenter}
                variant="contained"
                color="primary"
                onClick={updateIntro.bind(this, {
                  variables: {
                    attentionSchedule: this.state.attentionSchedule,
                    imageLink: this.state.imageLink
                  }
                })}
              >
                Guardar
              </Button>
            )}
          </Mutation>
        </Paper>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
