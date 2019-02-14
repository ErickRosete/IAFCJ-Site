import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";
import Link from "react-router-dom/Link";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

//wrappers
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

//Buttons
import Fab from "@material-ui/core/Fab";
import GridList from "../../components/Blog/GridList";

import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

//Dialog
import DeleteDialog from "../../components/Dialog/DeleteDialog";

import Spinner from "../../components/Spinner/Spinner"
import { Query, Mutation } from "react-apollo";
import { GET_BLOG, DELETE_BLOGENTRY } from "./constants";

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

export class Blog extends Component {
  state = {
    openDialog: false,
    selectedId: null
  };

  handleClickOpenDeleteDialog = id => {
    this.setState({
      selectedId: id,
      openDialog: true
    });
  };

  handleCloseDialog = () => {
    this.setState({ openDialog: false });
  };

  getGridListCols = () => {
    if (isWidthUp("lg", this.props.width)) {
      return 3;
    }
    if (isWidthUp("md", this.props.width)) {
      return 2;
    }
    return 1;
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout title="Lista de blogs">
        <div className="blog">
          <Query query={GET_BLOG}>
            {({ loading, error, data }) => {
              if (loading)
                return <Spinner></Spinner>;
              if (error) return <p>Error :( recarga la página!</p>;
              return (
                <GridList blog={data.blog}
                  getGridListCol={this.getGridListCols}
                  openDeleteDialog={this.handleClickOpenDeleteDialog}>
                </GridList>
              );
            }}
          </Query>

          <Mutation
            mutation={DELETE_BLOGENTRY}
            update={(cache, { data: { deleteBlogEntry } }) => {
              const { blog } = cache.readQuery({ query: GET_BLOG });
              const blogEntryIndex = blog.findIndex(
                blogEntry => blogEntry._id === deleteBlogEntry._id
              );
              blog.splice(blogEntryIndex, 1);
              cache.writeQuery({
                query: GET_BLOG,
                data: { blog: blog }
              });
            }}
          >
            {deleteBlogEntry => (
              <DeleteDialog
                info="entrada de blog"
                open={this.state.openDialog}
                onConfirm={() => {
                  deleteBlogEntry({
                    variables: { id: this.state.selectedId }
                  });
                  this.setState({
                    selectedId: null,
                    openDialog: false
                  });
                }}
                onCancel={this.handleCloseDialog}
              />
            )}
          </Mutation>

          <Link className={classes.fab} to="/blog/add">
            <Fab color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Link>
        </div>
      </Layout>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Blog);
