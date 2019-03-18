import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player"


export class FormDialog extends Component {
  constructor(props) {
    super(props);

    let name = "";
    let description = "";
    let link = "";

    if (this.props.video) {
      name = this.props.video.name ? this.props.video.name : "";
      description = this.props.video.description ? this.props.video.description : "";
      link = this.props.video.link ? this.props.video.link : "";
    }

    this.state = {
      name,
      description,
      link
    };

    console.log(this.state);
  }

  changeHandler = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  };

  changeRoleHandler = (role) => {
    this.setState({
      selectedRole: role
    });
  }

  onConfirmHandler = () => {
    //validation
    if (
      this.state.name === "" ||
      this.state.link === ""
    ) {
      return;
    }

    //grouping info
    let video = {
      ...this.state,
    };

    //adding id in edit
    if (this.props.video) {
      video = { ...video, id: this.props.video._id };
    }

    console.log(video);

    this.props.onConfirm(video);
  };

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-video-dialog"
      >
        <DialogTitle id="form-video-dialog">
          {this.props.video ? "Editar Video" : "Añadir Video"}
        </DialogTitle>

        <DialogContent>
          <TextField
            className={classes.TextField}
            required
            autoFocus
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            value={this.state.name}
            onChange={this.changeHandler.bind(this, "name")}
            error={this.state.name === ""}
            helperText={this.state.name === "" ? "Valor Requerido" : ""}
          />

          <TextField
            className={classes.TextField}
            autoFocus
            margin="dense"
            label="Descripción"
            type="text"
            fullWidth
            value={this.state.description}
            onChange={this.changeHandler.bind(this, "description")}
          />

          <TextField
            className={classes.TextField}
            required
            autoFocus
            margin="dense"
            label="URL de Video"
            type="text"
            fullWidth
            value={this.state.link}
            error={this.state.link === ""}
            helperText={this.state.link === "" ? "Valor Requerido" : ""}
            onChange={this.changeHandler.bind(this, "link")}
          />
          {this.state.link && (
            <div className={classes.playerWrapper}>
              <ReactPlayer
                className={classes.reactPlayer}
                url={this.state.link}
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

        </DialogContent>

        <DialogActions>
          <Button onClick={this.props.onCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={this.onConfirmHandler} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(FormDialog);
