import React, { Component } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import FormLabel from "@material-ui/core/FormLabel";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";

import Spinner from "../../components/Spinner/Spinner";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

export class Form extends Component {
  constructor(props) {
    super(props);

    let editorState;
    let title;
    let imageLink;
    let shortDescription;
    let date;

    if (props.event) {
      console.log(props.event);
      title = props.event.title ? props.event.title : "";
      shortDescription = props.event.shortDescription
        ? props.event.shortDescription
        : "";
      imageLink = props.event.imageLink ? props.event.imageLink : "";
      date = props.event.date ? props.event.date : "";

      //editor
      const html = props.event.description;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        editorState = EditorState.createWithContent(contentState);
      }
    } else {
      title = "";
      date = "";
      shortDescription = "";
      imageLink = "";
      editorState = EditorState.createEmpty();
    }

    this.state = {
      title,
      date,
      shortDescription,
      editorState,
      imageLink,
      uploadingImage: false
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  changeTitleHandler = event => {
    this.setState({
      title: event.target.value
    });
  };

  changeDateHandler = event => {
    this.setState({
      date: event.target.value
    });
  };

  changeShortDescriptionHandler = event => {
    this.setState({
      shortDescription: event.target.value
    });
  };

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    var formData = new FormData();
    formData.append("file", event.target.files[0]);

    // headers: { "Content-Type": "multipart/form-data" },
    fetch(`http://localhost:8000/uploadImage`, {
      method: "POST",
      body: formData
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState({ uploadingImage: false, imageLink: resData });
        console.log(resData);
      })
      .catch(err => {
        this.setState({ uploadingImage: false });
        console.log(err);
      });
  };

  onSubmitHandler = e => {
    e.preventDefault();

    const title = this.state.title;
    if (title === "") {
      return;
    }

    let event = {
      title,
      date: this.state.date,
      imageLink: this.state.imageLink,
      shortDescription: this.state.shortDescription,
      description: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      )
    };

    if (this.props.event) {
      event = { id: this.props.event._id, ...event };
    }

    this.props.onSubmit(event);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className="event-form" onSubmit={this.onSubmitHandler}>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12}>
            <TextField
              required
              autoFocus
              className={classes.textfield}
              margin="dense"
              label="Nombre"
              type="text"
              fullWidth
              value={this.state.title}
              onChange={this.changeTitleHandler}
              error={this.state.title === ""}
              helperText={this.state.title === "" ? "Valor Requerido" : ""}
            />
          </Grid>

          {/* image */}
          <Grid item xs={12} md={7}>
            <div className={classes.center}>
              <input
                accept="image/*"
                onChange={this.changeImageHandler}
                className={classes.input}
                id="contained-button-file"
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Subir Imagen
                </Button>
              </label>

              {this.state.imageLink && (
                <div className={classes.imgContainer}>
                  {this.state.uploadingImage ? (
                    <Spinner />
                  ) : (
                    <img
                      height={100}
                      key={this.state.imageLink}
                      className={classes.img}
                      src={this.state.imageLink}
                      alt="evento"
                    />
                  )}
                </div>
              )}
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <TextField
              className={classes.textField}
              id="datetime-local"
              label="Fecha"
              type="datetime-local"
              value={this.state.date}
              onChange={this.changeDateHandler}
              error={this.state.date === ""}
              helperText={this.state.date === "" ? "Valor Requerido" : ""}
              required
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              className={classes.textfield}
              margin="dense"
              label="Descripción corta"
              type="text"
              fullWidth
              value={this.state.shortDescription}
              onChange={this.changeShortDescriptionHandler}
            />
          </Grid>

          <Grid item xs={12}>
            <div className={classes.textfield}>
              <FormLabel
                required
                error={!this.state.editorState.getCurrentContent().hasText()}
              >
                Descripción del evento
              </FormLabel>
              <Editor
                editorState={this.state.editorState}
                wrapperClassName={classes.wrapper}
                editorClassName={classes.editor}
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
          </Grid>

          <Button type="submit" variant="contained" color="primary" autoFocus>
            Guardar
          </Button>
        </Grid>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
