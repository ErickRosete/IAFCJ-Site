import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Spinner from "../../components/Spinner/Spinner";
import {
  styles,
  DELETE_VIDEO,
  GET_VIDEOS,
  EDIT_VIDEO,
  ADD_VIDEO
} from "./constants";

import CardList from "../../components/Videos/CardList/CardList";

//Buttons
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteDialog from "../../components/Dialog/DeleteDialog";
import FormDialog from "../../containers/Videos/FormDialog";

//Dialog
import { Query, Mutation } from "react-apollo";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";

export class VideosPage extends Component {
  state = {
    openDeleteDialog: false,
    openEditDialog: false,
    openAddDialog: false,
    filter: "",
    selectedVideo: { _id: "" }
  };

  handleClickOpenDeleteDialog = video => {
    this.setState({
      selectedVideo: video,
      openDeleteDialog: true
    });
  };

  handleCloseDeleteDialog = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleClickOpenEditDialog = video => {
    this.setState({
      selectedVideo: video,
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
      <Layout title="Lista de videos">
        <div className={classes.videos}>
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
          <Query query={GET_VIDEOS}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;

              let filteredVideos = data.videos;
              if (this.state.filter) {
                const filter = this.state.filter.toUpperCase();
                filteredVideos = data.videos.filter(
                  video =>
                    video.name.toUpperCase().includes(filter) ||
                    video.description.toUpperCase().includes(filter) ||
                    video.link.toUpperCase().includes(filter)
                );
              }

              return (
                <CardList
                  videos={filteredVideos}
                  openEdit={this.handleClickOpenEditDialog}
                  openDelete={this.handleClickOpenDeleteDialog}
                />
              );
            }}
          </Query>

          {/* DELETE */}
          <Mutation
            mutation={DELETE_VIDEO}
            update={(cache, { data: { deleteVideo } }) => {
              const { videos } = cache.readQuery({ query: GET_VIDEOS });
              const videoIndex = videos.findIndex(
                video => video._id === deleteVideo._id
              );
              videos.splice(videoIndex, 1);
              cache.writeQuery({
                query: GET_VIDEOS,
                data: { videos }
              });
            }}
          >
            {deleteVideo => (
              <DeleteDialog
                info="Video"
                open={this.state.openDeleteDialog}
                onConfirm={() => {
                  deleteVideo({
                    variables: { id: this.state.selectedVideo._id }
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
          <Mutation mutation={EDIT_VIDEO}>
            {updateVideo => (
              <FormDialog
                key={this.state.selectedVideo._id}
                video={this.state.selectedVideo}
                open={this.state.openEditDialog}
                onConfirm={video => {
                  updateVideo({
                    variables: { ...video }
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
            mutation={ADD_VIDEO}
            update={(cache, { data: { createVideo } }) => {
              const { videos } = cache.readQuery({ query: GET_VIDEOS });
              videos.push(createVideo);
              cache.writeQuery({
                query: GET_VIDEOS,
                data: { videos }
              });
            }}
          >
            {createVideo => (
              <FormDialog
                open={this.state.openAddDialog}
                onConfirm={video => {
                  createVideo({
                    variables: { ...video }
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

VideosPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideosPage);
