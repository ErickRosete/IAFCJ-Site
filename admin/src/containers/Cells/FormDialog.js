import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

//Google Maps
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import MapsSearch from "../../components/Maps/MapsSearch";

export class FormDialog extends Component {

  constructor(props) {
    super(props);

    console.log(props)
    let leader = "";
    let phone = "";
    let date = "";
    let address = "";
    let coords = { lat: 32.457334, lng: -114.793487 }

    if (this.props.cell) {
      leader = this.props.cell.leader ? this.props.cell.leader : "";
      phone = this.props.cell.phone ? this.props.cell.phone : "";
      date = this.props.cell.date ? this.props.cell.date : "";
      address = this.props.cell.address ? this.props.cell.address : "";
    }

    this.state = {
      leader,
      phone,
      date,
      address,
      coords
    };
  }

  componentDidMount() {
    if (this.state.address) {
      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(coords => {
          this.setState({
            coords
          })
        })
    }
  }

  changeAddressHandler = event => {
    const address = event.target.value;
    this.setState({
      address
    })
  };

  searchAddressHandler = () => {
    geocodeByAddress(this.state.address)
      .then(results => {
        return getLatLng(results[0])
      })
      .then(coords => {
        this.setState({
          coords
        })
      })
      .catch(error => console.log(error));
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
    if (this.state.leader === "" ||
      this.state.phone === "" ||
      this.state.phone === "" ||
      this.state.address === "") {
      return;
    }

    //grouping info
    let cell = {
      leader: this.state.leader,
      phone: this.state.phone,
      date: this.state.date,
      address: this.state.address
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
            required
            autoFocus
            margin="dense"
            label="Teléfono"
            type="text"
            fullWidth
            value={this.state.phone}
            error={this.state.phone === ""}
            helperText={this.state.phone === "" ? "Valor Requerido" : ""}
            onChange={this.changePhoneHandler}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            label="Horarios de atencion"
            type="text"
            fullWidth
            value={this.state.date}
            onChange={this.changeDateHandler}
            error={this.state.date === ""}
            helperText={this.state.date === "" ? "Valor Requerido" : ""}
          />

          {this.props.scriptLoaded &&
            <MapsSearch
              address={this.state.address}
              onChange={this.changeAddressHandler}
              onSearch={this.searchAddressHandler}
              coords={this.state.coords}
              apiKey={this.props.apikey} />}

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
