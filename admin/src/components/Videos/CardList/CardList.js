import React from "react";
import Card from "./Card/Card";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  cardList: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

const CardList = props => {
  const { classes } = props;
  return (
    <div className={classes.cardList}>
      {props.videos.map(video => {
        return (
          <Card
            key={video._id}
            openDeleteDialog={props.openDeleteDialog}
            video={video}
          />
        );
      })}
    </div>
  );
};

export default withStyles(styles)(CardList);
