import React from "react";

import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import Link from "react-router-dom/Link";

//Grid
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const styles = theme => ({
  actionIcons: {
    display: "flex",
    flexShrink: "1"
  },
  fabOptions: {
    margin: theme.spacing.unit
  }
});

const BlogGridList = props => {
  const gridListCols = props.getGridListCol();

  const { classes } = props;

  return (
    <GridList cellHeight={200} cols={gridListCols} spacing={15}>
      {props.blog.map(tile => (
        <GridListTile key={tile._id} cols={1}>
          <img src={tile.imageLink} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>{tile.subtitle}</span>}
            actionIcon={
              <div className={classes.actionIcons}>
                <Link to={`blog/edit/${tile._id}`}>
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="Edit"
                    className={classes.fabOptions}
                  >
                    <EditIcon />
                  </Fab>
                </Link>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Delete"
                  className={classes.fabOptions}
                  onClick={props.openDeleteDialog.bind(this, tile._id)}
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
};

export default withStyles(styles)(BlogGridList);
