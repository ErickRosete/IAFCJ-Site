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

    let editorState = EditorState.createEmpty();
    let title = "";
    let subtitle = "";
    let shortDescription = "";
    let imageLink = "";

    if (props.blogEntry) {
      console.log(props.blogEntry);
      title = props.blogEntry.title ? props.blogEntry.title : "";
      subtitle = props.blogEntry.subtitle ? props.blogEntry.subtitle : "";
      shortDescription = props.blogEntry.shortDescription
        ? props.blogEntry.shortDescription
        : "";
      imageLink = props.blogEntry.imageLink ? props.blogEntry.imageLink : "";
      //editor
      const html = props.blogEntry.description;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        editorState = EditorState.createWithContent(contentState);
      }
    }

    this.state = {
      title,
      subtitle,
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

  changeSubtitleHandler = event => {
    this.setState({
      subtitle: event.target.value
    });
  };

  changeShortDescriptionHandler = event => {
    this.setState({
      shortDescription: event.target.value
    });
  };

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    const image = event.target.files[0];
    var formData = new FormData();
    formData.append("file", image);
    formData.append("name", image.name);

    // headers: { "Content-Type": "multipart/form-data" },
    fetch(`${process.env.REACT_APP_SERVER_URL}/uploadImage`, {
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

  onSubmitHandler = event => {
    event.preventDefault();

    const title = this.state.title;
    if (title === "") {
      return;
    }

    let blogEntry = {
      title,
      subtitle: this.state.subtitle,
      imageLink: this.state.imageLink,
      shortDescription: this.state.shortDescription,
      description: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      )
    };

    if (this.props.blogEntry) {
      blogEntry = { id: this.props.blogEntry._id, ...blogEntry };
    }

    this.props.onSubmit(blogEntry);
  };

  render() {
    const { classes } = this.props;
    return (
      <form className="blog-form" onSubmit={this.onSubmitHandler}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <TextField
              required
              autoFocus
              className={classes.textfield}
              margin="dense"
              label="Título"
              type="text"
              fullWidth
              value={this.state.title}
              onChange={this.changeTitleHandler}
              error={this.state.title === ""}
              helperText={this.state.title === "" ? "Valor Requerido" : ""}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              className={classes.textfield}
              margin="dense"
              label="Subtítulo"
              type="text"
              fullWidth
              value={this.state.subtitle}
              onChange={this.changeSubtitleHandler}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            {/* image */}
            <div className={classes.imagefield}>
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
                      src={this.state.imageLink}
                      alt="blog main"
                    />
                  )}
                </div>
              )}
            </div>
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
                Contenido del blog
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
