import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

const DeleteDialog = props => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`"Eliminar ${props.info}"`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Estas seguro que deseas eliminar {props.info}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="primary">
          Cancelar
        </Button>
        <Button onClick={props.onConfirm} color="primary" autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
