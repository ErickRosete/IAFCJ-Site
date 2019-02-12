import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

//Route
import Link from "react-router-dom/Link";

//Grid
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

//wrappers
import compose from "recompose/compose";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

//Buttons
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

//Dialog
import DeleteDialog from "../../components/Dialog/DeleteDialog";

import { Query, Mutation } from "react-apollo";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GET_BLOG, DELETE_BLOGENTRY } from "./constants";

const styles = theme => ({
  fab: {
    position: "absolute",
    top: theme.mixins.toolbar.minHeight + theme.spacing.unit * 3,
    right: theme.spacing.unit * 2
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  actionIcons: {
    display: "flex",
    flexShrink: "1"
  },
  fabOptions: {
    margin: theme.spacing.unit
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
    const gridListCols = this.getGridListCols();

    return (
      <Layout title="Lista de blogs">
        <div className="blog">
          <Query query={GET_BLOG}>
            {({ loading, error, data }) => {
              if (loading)
                return <CircularProgress className={classes.progress} />;
              if (error) return <p>Error :(</p>;
              return (
                <GridList cellHeight={200} cols={gridListCols} spacing={15}>
                  {data.blog.map(tile => (
                    <GridListTile key={tile._id} cols={1}>
                      <img src={tile.imageLink} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={<span>{tile.subtitle}</span>}
                        actionIcon={
                          <div className={classes.actionIcons}>
                            <Link to={`blog/editar/${tile._id}`}>
                              <Fab
                                color="primary"
                                aria-label="Edit"
                                className={classes.fabOptions}
                              >
                                <EditIcon />
                              </Fab>
                            </Link>
                            <Fab
                              color="secondary"
                              aria-label="Delete"
                              className={classes.fabOptions}
                              onClick={this.handleClickOpenDeleteDialog.bind(
                                this,
                                tile._id
                              )}
                            >
                              <DeleteIcon />
                            </Fab>
                          </div>
                        }
                      />
                    </GridListTile>
                  ))}
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

          <Link className={classes.fab} to="/blog/agregar">
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
