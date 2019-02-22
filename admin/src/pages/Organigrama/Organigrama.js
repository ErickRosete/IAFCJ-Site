import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

//styles
import { styles } from "./constants";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import DeleteDialog from "../../components/Dialog/DeleteDialog";
import FormDialog from "../../containers/Members/FormDialog";
import Table from "../../components/Members/Table";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

//graphql
import { Query, Mutation } from "react-apollo";
import Spinner from "../../components/Spinner/Spinner";
import {
  GET_MEMBERS,
  DELETE_MEMBER,
  EDIT_MEMBER,
  ADD_MEMBER
} from "./constants";

export class OrganigramaPage extends Component {
  state = {
    openDeleteDialog: false,
    openEditDialog: false,
    openAddDialog: false,
    filter: "",
    selectedMember: { _id: "" }
  };

  handleClickOpenDeleteDialog = member => {
    this.setState({
      selectedMember: member,
      openDeleteDialog: true
    });
  };

  handleCloseDeleteDialog = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleClickOpenEditDialog = member => {
    this.setState({
      selectedMember: member,
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
      <Layout title="Organigrama">
        <div className={classes.members}>
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
          <Query query={GET_MEMBERS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              let filteredMembers = data.members;
              if (this.state.filter) {
                const filter = this.state.filter.toUpperCase();
                filteredMembers = data.members.filter(
                  member =>
                    member.name.toUpperCase().includes(filter) ||
                    member.job.toUpperCase().includes(filter) ||
                    member.description.toUpperCase().includes(filter)
                );
              }

              return (
                <Table
                  members={filteredMembers}
                  openEdit={this.handleClickOpenEditDialog}
                  openDelete={this.handleClickOpenDeleteDialog}
                />
              );
            }}
          </Query>

          {/* DELETE */}
          <Mutation
            mutation={DELETE_MEMBER}
            update={(cache, { data: { deleteMember } }) => {
              const { members } = cache.readQuery({ query: GET_MEMBERS });
              const memberIndex = members.findIndex(
                member => member._id === deleteMember._id
              );
              members.splice(memberIndex, 1);
              cache.writeQuery({
                query: GET_MEMBERS,
                data: { members }
              });
            }}
          >
            {deleteMember => (
              <DeleteDialog
                info="miembro"
                open={this.state.openDeleteDialog}
                onConfirm={() => {
                  deleteMember({
                    variables: { id: this.state.selectedMember._id }
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
          <Mutation mutation={EDIT_MEMBER}>
            {updateMember => (
              <FormDialog
                key={this.state.selectedMember._id}
                member={this.state.selectedMember}
                open={this.state.openEditDialog}
                onConfirm={member => {
                  updateMember({
                    variables: { ...member }
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
            mutation={ADD_MEMBER}
            update={(cache, { data: { createMember } }) => {
              const { members } = cache.readQuery({ query: GET_MEMBERS });
              members.push(createMember);
              cache.writeQuery({
                query: GET_MEMBERS,
                data: { members }
              });
            }}
          >
            {createMember => (
              <FormDialog
                open={this.state.openAddDialog}
                onConfirm={member => {
                  createMember({
                    variables: { ...member }
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

OrganigramaPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OrganigramaPage);
