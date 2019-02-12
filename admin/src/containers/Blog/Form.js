import React, { Component } from "react";
import Redirect from "react-router-dom/Redirect";

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

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export class Form extends Component {
  constructor(props) {
    super(props);

    let editorState;
    let title;
    let subtitle;
    let shortDescription;
    let image;

    if (props.blogEntry) {
      console.log(props.blogEntry);
      title = props.blogEntry.title;
      subtitle = props.blogEntry.subtitle;
      shortDescription = props.blogEntry.shortDescription;
      //editor
      const html = props.blogEntry.description;
      const contentBlock = htmlToDraft(html);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        editorState = EditorState.createWithContent(contentState);
      }
    } else {
      title = "";
      subtitle = "";
      shortDescription = "";
      image = null;
      editorState = EditorState.createEmpty();
    }

    this.state = {
      title,
      subtitle,
      shortDescription,
      editorState,
      image,
      return: false
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

  uploadImage() {
    var formData = new FormData();
    formData.append("file", this.state.image);
    formData.append("name", this.state.image.name);

    fetch(`http://localhost:8000/images`, {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.images, isLoading: false });
        this.props.updateImages(data.images);
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  changeImageHandler = event => {
    this.setState({
      image: event.target.files[0]
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
      shortDescription: this.state.shortDescription,
      description: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      )
    };

    if (this.props.blogEntry) {
      blogEntry = { id: this.props.blogEntry._id, ...blogEntry };
    }

    this.props.onSubmit(blogEntry);
    this.setState({ return: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className="blog-form" onSubmit={this.onSubmitHandler}>
        {this.state.return && <Redirect push to="/blog" />}
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

        {/* image */}
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

        <TextField
          className={classes.textfield}
          margin="dense"
          label="Subtítulo"
          type="text"
          fullWidth
          value={this.state.subtitle}
          onChange={this.changeSubtitleHandler}
        />
        <TextField
          className={classes.textfield}
          margin="dense"
          label="Descripción corta"
          type="text"
          fullWidth
          value={this.state.shortDescription}
          onChange={this.changeShortDescriptionHandler}
        />
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
        <Button type="submit" variant="contained" color="primary" autoFocus>
          Guardar
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
