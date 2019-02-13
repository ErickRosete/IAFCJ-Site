import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export class FormDialog extends Component {
  constructor(props) {
    super(props);

    let leader;
    let phone;
    let date;
    if (this.props.cell) {
      leader = this.props.cell.leader ? this.props.cell.leader : "";
      phone = this.props.cell.phone ? this.props.cell.phone : "";
      date = this.props.cell.date ? this.props.cell.date : "";
    } else {
      leader = "";
      phone = "";
      date = "";
    }

    this.state = {
      leader,
      phone,
      date
    };
  }

  changeLeaderHandler = event => {
    this.setState({
      leader: event.target.value
    });
  };

  changePhoneHandler = event => {
    this.setState({
      phone: event.target.value
    });
  };

  changeDateHandler = event => {
    this.setState({
      date: event.target.value
    });
  };

  onConfirmHandler = () => {
    //validation
    if (this.state.leader === "") {
      return;
    }

    //grouping info
    let cell = {
      leader: this.state.leader,
      phone: this.state.phone,
      date: this.state.date
    };

    //adding id in edit
    if (this.props.cell) {
      cell = { ...cell, id: this.props.cell._id };
    }

    this.props.onConfirm(cell);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-cell-dialog"
      >
        {this.props.cell ? (
          <DialogTitle id="form-cell-dialog">Editar Celula</DialogTitle>
        ) : (
          <DialogTitle id="form-cell-dialog">Añadir Celula</DialogTitle>
        )}

        <DialogContent>
          <TextField
            required
            autoFocus
            margin="dense"
            label="Líder"
            type="text"
            fullWidth
            value={this.state.leader}
            onChange={this.changeLeaderHandler}
            error={this.state.leader === ""}
            helperText={this.state.leader === "" ? "Valor Requerido" : ""}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Teléfono"
            type="text"
            fullWidth
            value={this.state.phone}
            onChange={this.changePhoneHandler}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Horarios de atencion"
            type="text"
            fullWidth
            value={this.state.date}
            onChange={this.changeDateHandler}
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

export default FormDialog;
