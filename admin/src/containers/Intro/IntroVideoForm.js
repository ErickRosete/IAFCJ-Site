import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReactPlayer from "react-player"


export class Form extends Component {
  constructor(props) {
    super(props);

    let videoLink = "";

    if (props.introVideo) {
      videoLink = props.introVideo.videoLink ? props.introVideo.videoLink : "";
    }

    this.state = {
      videoLink
    };
  }

  changeVideoLinkHandler = event => {
    this.setState({
      videoLink: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const videoLink = this.state.videoLink;
    if (videoLink === "") {
      return;
    }

    let introVideo = {
      videoLink
    };

    this.props.onSubmit(introVideo);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.onSubmitHandler}>
        <Paper className={classes.root} elevation={1}>
          <h2 style={{ textAlign: 'center' }}>Video de Soy Nuevo</h2>
          <TextField
            required
            autoFocus
            className={classes.textfield}
            margin="normal"
            label="Link de Video"
            type="text"
            fullWidth
            value={this.state.videoLink}
            onChange={this.changeVideoLinkHandler}
            error={this.state.videoLink === ""}
            helperText={
              this.state.videoLink === "" ? "Valor Requerido" : ""
            }
          />
          {this.state.videoLink && (
            <div className={classes.playerWrapper}>
              <ReactPlayer
                className={classes.reactPlayer}
                url={this.state.videoLink}
                config={{
                  youtube: {
                    playerVars: {
                      origin: process.env.REACT_APP_ADMIN_URL
                    }
                  }
                }}
                width="100%"
                height="100%"
                controls
              />
            </div>
          )}

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
