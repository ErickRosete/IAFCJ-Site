import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ReactPlayer from "react-player"


import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 345,
    margin: "1rem"
  },
  button: {
    margin: theme.spacing.unit
  },
  link: {
    textDecoration: "none"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  playerWrapper: {
    marginBottom: '0.5rem',
    position: "relative",
    paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */
  },
  reactPlayer: {
    position: "absolute",
    top: 0,
    left: 0
  },
  cardContent: {
    padding: 0,
    flexGrow: 1
  },
  cardInfo: {
    margin: 2 * theme.spacing.unit,
    marginBottom: 0
  }
});

const VideoCard = props => {
  const { classes, video } = props;
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {video.link && (
          <div className={classes.playerWrapper}>
            <ReactPlayer
              className={classes.reactPlayer}
              url={video.link}
              config={{
                youtube: {
                  playerVars: {
                    origin: process.env.REACT_APP_ADMIN_URL
                  }
                }
              }}
              width="100%"
              height="100%"
              controls
            />
          </div>
        )}
        <div className={classes.cardInfo}>
          <Typography gutterBottom variant="h5" component="h2">
            {video.name}
          </Typography>
          <Typography component="p">{video.description}</Typography>
        </div>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          color="primary"
          aria-label="Edit"
          className={classes.button}
          onClick={props.openEdit.bind(this, video)}
        >
          Editar
          <EditIcon className={classes.rightIcon} />
        </Button>

        <Button
          variant="contained"
          color="secondary"
          aria-label="Edit"
          className={classes.button}
          onClick={props.openDelete.bind(this, video)}
        >
          Eliminar
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </CardActions>
    </Card>
  );
};

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoCard);
