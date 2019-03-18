import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Select from 'react-select'
import FormLabel from '@material-ui/core/FormLabel';

const options = [
  { value: 'admin', label: 'Administrador' },
  { value: 'editor', label: 'Editor' },
];

export class FormDialog extends Component {
  constructor(props) {
    super(props);

    let email = "";
    let password = "";
    let selectedRole = { value: "editor", label: "Editor" }

    if (this.props.user) {
      email = this.props.user.email ? this.props.user.email : "";
      password = this.props.user.password ? this.props.user.password : "";

      if (props.user.role === "admin") {
        selectedRole = { value: "admin", label: "Administrador" }
      }
    }

    this.state = {
      email,
      password,
      selectedRole
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
      this.state.email === "" ||
      this.state.password === ""
    ) {
      return;
    }

    //grouping info
    let user = {
      ...this.state,
      role: this.state.selectedRole.value
    };

    //adding id in edit
    if (this.props.user) {
      user = { ...user, id: this.props.user._id };
    }

    console.log(user);

    this.props.onConfirm(user);
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-user-dialog"
      >
        <DialogTitle id="form-user-dialog">
          {this.props.user ? "Editar Usuario" : "Añadir Usuario"}
        </DialogTitle>

        <DialogContent>
          <FormLabel component="legend" style={{ marginBottom: '.2rem' }} required>Tipo de Usuario</FormLabel>
          <Select options={options} onChange={this.changeRoleHandler} value={this.state.selectedRole} />

          <TextField
            required
            autoFocus
            margin="normal"
            label="Correo electrónico"
            type="text"
            fullWidth
            value={this.state.email}
            onChange={this.changeHandler.bind(this, "email")}
            error={this.state.email === ""}
            helperText={this.state.email === "" ? "Valor Requerido" : ""}
          />

          <TextField
            required
            autoFocus
            margin="normal"
            label="Contraseña"
            type="text"
            fullWidth
            value={this.state.password}
            error={this.state.password === ""}
            helperText={this.state.password === "" ? "Valor Requerido" : ""}
            onChange={this.changeHandler.bind(this, "password")}
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
