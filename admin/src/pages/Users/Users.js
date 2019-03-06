import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

//styles
import { styles } from "./constants";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import DeleteDialog from "../../components/Dialog/DeleteDialog";
import FormDialog from "../../containers/Users/FormDialog";
import Table from "../../components/Users/Table";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

//graphql
import { Query, Mutation } from "react-apollo";
import Spinner from "../../components/Spinner/Spinner";
import { GET_USERS, DELETE_USER, EDIT_USER, ADD_USER } from "./constants";

export class UsersPage extends Component {
  state = {
    openDeleteDialog: false,
    openEditDialog: false,
    openAddDialog: false,
    filter: "",
    selectedUser: { _id: "" }
  };

  handleClickOpenDeleteDialog = user => {
    this.setState({
      selectedUser: user,
      openDeleteDialog: true
    });
  };

  handleCloseDeleteDialog = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleClickOpenEditDialog = user => {
    this.setState({
      selectedUser: user,
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

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Layout title="Lista de usuarios">
        <div className={classes.users}>
          <TextField
            autoFocus
            margin="normal"
            label="Busqueda"
            type="text"
            className={classes.textfield}
            value={this.state.filter}
            onChange={this.handleFilterChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />

          {/* GET */}
          <Query query={GET_USERS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              let filteredUsers = data.users;
              if (this.state.filter) {
                const filter = this.state.filter.toUpperCase();
                filteredUsers = data.users.filter(user =>
                  user.email.toUpperCase().includes(filter)
                );
              }

              return (
                <Table
                  users={filteredUsers}
                  openEdit={this.handleClickOpenEditDialog}
                  openDelete={this.handleClickOpenDeleteDialog}
                />
              );
            }}
          </Query>

          {/* DELETE */}
          <Mutation
            mutation={DELETE_USER}
            update={(cache, { data: { deleteUser } }) => {
              const { users } = cache.readQuery({ query: GET_USERS });
              const userIndex = users.findIndex(
                user => user._id === deleteUser._id
              );
              users.splice(userIndex, 1);
              cache.writeQuery({
                query: GET_USERS,
                data: { users }
              });
            }}
          >
            {deleteUser => (
              <DeleteDialog
                info="Usuario"
                open={this.state.openDeleteDialog}
                onConfirm={() => {
                  deleteUser({
                    variables: { id: this.state.selectedUser._id }
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
          <Mutation mutation={EDIT_USER}>
            {updateUser => (
              <FormDialog
                key={this.state.selectedUser._id}
                user={this.state.selectedUser}
                open={this.state.openEditDialog}
                onConfirm={user => {
                  updateUser({
                    variables: { ...user }
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
          <Fab
            className={classes.fab}
            color="primary"
            aria-label="Add"
            onClick={this.handleClickOpenAddDialog}
          >
            <AddIcon />
          </Fab>

          <Mutation
            mutation={ADD_USER}
            update={(cache, { data: { createUser } }) => {
              const { users } = cache.readQuery({ query: GET_USERS });
              users.push(createUser);
              cache.writeQuery({
                query: GET_USERS,
                data: { users }
              });
            }}
          >
            {createUser => (
              <FormDialog
                open={this.state.openAddDialog}
                onConfirm={user => {
                  createUser({
                    variables: { ...user }
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

UsersPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(UsersPage);
