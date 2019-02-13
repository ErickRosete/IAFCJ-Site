import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Buttons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

//wrappers
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  tableRoot: {
    marginTop: theme.spacing.unit * 2,
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    minWidth: "80%"
  },
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const CellTable = props => {
  const { classes } = props;
  return (
    <Paper className={classes.tableRoot}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lider de celula</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell align="right">acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cells.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.leader}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.phone}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="Edit"
                  className={classes.button}
                  onClick={props.openEdit.bind(this, row)}
                >
                  Editar
                  <EditIcon className={classes.rightIcon} />
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  aria-label="Delete"
                  className={classes.button}
                  onClick={props.openDelete.bind(this, row)}
                >
                  Eliminar
                  <DeleteIcon className={classes.rightIcon} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

CellTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CellTable);
