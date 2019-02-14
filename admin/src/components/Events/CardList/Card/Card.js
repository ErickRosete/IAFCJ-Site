import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Link from "react-router-dom/Link";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
    margin: "1rem"
  },
  media: {
    height: 140
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

const EventCard = props => {
  const { classes, event } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={event.imageLink ? event.imageLink : "/placeholder"}
          title={event.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {event.title}
          </Typography>
          <Typography component="p">{event.shortDescription}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Link className={classes.link} to={`events/edit/${event._id}`}>
          <Button
            variant="contained"
            color="primary"
            aria-label="Edit"
            className={classes.button}
          >
            Editar
            <EditIcon className={classes.rightIcon} />
          </Button>
        </Link>
        <Button
          variant="contained"
          color="secondary"
          aria-label="Edit"
          className={classes.button}
          onClick={props.openDeleteDialog.bind(this, event._id)}
        >
          Eliminar
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

EventCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventCard);
