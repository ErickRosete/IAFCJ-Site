import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

//styles
import { styles } from "./constants"
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";


import DeleteDialog from "../../components/Cells/DeleteDialog";
import FormDialog from "../../containers/Cells/FormDialog";
import Table from "../../components/Cells/Table";

//Buttons
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

//graphql
import { Query, Mutation } from "react-apollo";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GET_CELLS, DELETE_CELL, EDIT_CELL, ADD_CELL } from "./constants"

export class CellsPage extends Component {
  state = {
    openDeleteDialog: false,
    openEditDialog: false,
    openAddDialog: false,
    selectedCell: { _id: ""},
  };

  handleClickOpenDeleteDialog = cell => {
    this.setState({
      selectedCell: cell,
      openDeleteDialog: true
    });
  };

  handleCloseDeleteDialog = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleClickOpenEditDialog = cell => {
    this.setState({
      selectedCell: cell,
      openEditDialog: true
    });
  };

  handleCloseEditDialog = () => {
    this.setState({ openEditDialog: false });
  };

  handleClickOpenAddDialog = () => {
    this.setState({ openAddDialog: true });
  };

  handleCloseAddDialog = () => {
    this.setState({ openAddDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Lista de celulas">
        <div className={classes.cells}>
          {/* GET */}
          <Query query={GET_CELLS}>
            {({ loading, error, data }) => {
              if (loading)
                return <CircularProgress className={classes.progress} />;
              if (error) return <p>Error :(</p>;
              return (<Table cells={data.cells}
                openEdit={this.handleClickOpenEditDialog}
                openDelete={this.handleClickOpenDeleteDialog} />);
            }}
          </Query>

          {/* DELETE */}
          <Mutation
            mutation={DELETE_CELL}
            update={(cache, { data: { deleteCell } }) => {
              const { cells } = cache.readQuery({ query: GET_CELLS });
              const cellIndex = cells.findIndex(
                cell => cell._id === deleteCell._id
              );
              cells.splice(cellIndex, 1);
              cache.writeQuery({
                query: GET_CELLS,
                data: { cells }
              });
            }}
          >
            {deleteCell => (
              <DeleteDialog
                info="celula"
                open={this.state.openDeleteDialog}
                onConfirm={() => {
                  deleteCell({
                    variables: { id: this.state.selectedCell._id }
                  });
                  this.setState({
                    openDeleteDialog: false
                  });
                }}
                onCancel={this.handleCloseDeleteDialog}
              />
            )}
          </Mutation>

          {/* EDIT */}
          <Mutation mutation={EDIT_CELL}
            update={(cache, { data: { updateCell } }) => {
              const { cells } = cache.readQuery({ query: GET_CELLS });
              let editedCellIndex = cells.findIndex(cell => cell._id === updateCell._id)
              cells[editedCellIndex] = updateCell
              cache.writeQuery({
                query: GET_CELLS,
                data: { cells }
              });
            }}>
            {updateCell => (
              <FormDialog
                key={this.state.selectedCell._id}
                cell={this.state.selectedCell}
                open={this.state.openEditDialog}
                onConfirm={(cell) => {
                  updateCell({
                    variables: { ...cell }
                  });
                  this.setState({
                    openEditDialog: false
                  });
                }}
                onCancel={this.handleCloseEditDialog}
              />
            )}
          </Mutation>

          {/* ADD */}
          <Fab className={classes.fab} color="primary" aria-label="Add" onClick={this.handleClickOpenAddDialog}>
            <AddIcon />
          </Fab>

          <Mutation mutation={ADD_CELL}
            update={(cache, { data: { createCell } }) => {
              const { cells } = cache.readQuery({ query: GET_CELLS });
              cells.push(createCell)
              cache.writeQuery({
                query: GET_CELLS,
                data: { cells }
              });
            }}>
            {createCell => (
              <FormDialog
                open={this.state.openAddDialog}
                onConfirm={(cell) => {
                  createCell({
                    variables: { ...cell }
                  });
                  this.setState({
                    openAddDialog: false
                  });
                }}
                onCancel={this.handleCloseAddDialog}
              />
            )}
          </Mutation>

        </div>
      </Layout>
    );
  }
}

CellsPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CellsPage);
