import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Spinner from "../../components/Spinner/Spinner";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  textfield: {
    margin: theme.spacing.unit
  },
  imagefield: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgContainer: {
    marginLeft: '2rem'
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

export class FormDialog extends Component {
  constructor(props) {
    super(props);

    let name = "";
    let job = "";
    let description = "";
    let imageLink = "";

    if (this.props.member) {
      name = this.props.member.name ? this.props.member.name : "";
      job = this.props.member.job ? this.props.member.jon : "";
      description = this.props.member.description
        ? this.props.member.description
        : "";
      imageLink = this.props.member.imageLink
        ? this.props.member.imageLink
        : "";
    }

    this.state = {
      name,
      job,
      description,
      imageLink,
      uploadingImage: false
    };
  }

  changeNameHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  changeJobHandler = event => {
    this.setState({
      job: event.target.value
    });
  };

  changeDescriptionHandler = event => {
    this.setState({
      description: event.target.value
    });
  };

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    const image = event.target.files[0];
    var formData = new FormData();
    formData.append("file", image);
    formData.append("name", image.name);

    // headers: { "Content-Type": "multipart/form-data" },
    fetch(`https://server.iglesiacristianasanluis.com/uploadImage`, {
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
    if (this.state.name === "" || this.state.job === "") {
      return;
    }

    //grouping info
    let member = {
      name: this.state.name,
      job: this.state.job,
      description: this.state.description,
      imageLink: this.state.imageLink
    };

    //adding id in edit
    if (this.props.member) {
      member = { ...member, id: this.props.member._id };
    }

    this.props.onConfirm(member);
  };

  render() {
    const classes = this.props.classes;
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-member-dialog"
      >
        <DialogTitle id="form-member-dialog">
          {this.props.member ? "Editar Miembro" : "Añadir Miembro"}
        </DialogTitle>

        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            value={this.state.name}
            onChange={this.changeNameHandler}
            error={this.state.name === ""}
            helperText={this.state.name === "" ? "Valor Requerido" : ""}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            label="Puesto"
            type="text"
            fullWidth
            value={this.state.job}
            onChange={this.changeJobHandler}
            error={this.state.job === ""}
            helperText={this.state.job === "" ? "Valor Requerido" : ""}
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

          <TextField
            label="Descripción"
            fullWidth
            margin="dense"
            multiline
            rowsMax="6"
            value={this.state.description}
            onChange={this.changeDescriptionHandler}
            className={classes.textField}
          />
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
