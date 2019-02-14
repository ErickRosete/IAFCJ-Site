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
      {props.events.map(event => {
        return (
          <Card
            key={event._id}
            openDeleteDialog={props.openDeleteDialog}
            event={event}
          />
        );
      })}
    </div>
  );
};

export default withStyles(styles)(CardList);
