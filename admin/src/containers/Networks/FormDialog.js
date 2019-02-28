import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Spinner from "../../components/Spinner/Spinner";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";

export class FormDialog extends Component {
  constructor(props) {
    super(props);

    console.log(props);
    let leader = "";
    let imageLink = "";

    if (this.props.network) {
      leader = this.props.network.leader ? this.props.network.leader : "";
      imageLink = this.props.network.imageLink
        ? this.props.network.imageLink
        : "";
    }

    this.state = {
      leader,
      imageLink,
      uploadingImage: false
    };

    console.log(this.state);
  }

  changeLeaderHandler = event => {
    this.setState({
      leader: event.target.value
    });
  };

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    const image = event.target.files[0];
    var formData = new FormData();
    formData.append("file", image);
    formData.append("name", image.name);

    // headers: { "Content-Type": "multipart/form-data" },
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

  onConfirmHandler = () => {
    //validation
    if (this.state.leader === "") {
      return;
    }

    //grouping info
    let network = {
      leader: this.state.leader,
      imageLink: this.state.imageLink
    };

    //adding id in edit
    if (this.props.network) {
      network = { ...network, id: this.props.network._id };
    }

    this.props.onConfirm(network);
  };

  render() {
    const classes = this.props.classes;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-cell-dialog"
      >
        {this.props.network ? (
          <DialogTitle id="form-cell-dialog">Editar Red</DialogTitle>
        ) : (
          <DialogTitle id="form-cell-dialog">Añadir Red</DialogTitle>
        )}

        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Líder"
            type="text"
            fullWidth
            className={classes.textfield}
            value={this.state.leader}
            onChange={this.changeLeaderHandler}
            error={this.state.leader === ""}
            helperText={this.state.leader === "" ? "Valor Requerido" : ""}
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
                    height={100}
                    src={this.state.imageLink}
                    alt="blog main"
                  />
                )}
              </div>
            )}
          </div>
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

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormDialog);
