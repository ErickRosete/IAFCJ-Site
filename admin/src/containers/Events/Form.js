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

    let editorState = EditorState.createEmpty();;
    let title = "";
    let imageLink = "";
    let shortDescription = "";
    let startDate = "";
    let endDate = "";
    let address = "";

    if (props.event) {
      console.log(props.event);
      title = props.event.title ? props.event.title : "";
      shortDescription = props.event.shortDescription
        ? props.event.shortDescription
        : "";
      imageLink = props.event.imageLink ? props.event.imageLink : "";
      startDate = props.event.startDate ? props.event.startDate : "";
      endDate = props.event.endDate ? props.event.endDate : "";
      address = props.event.address ? props.event.address : "";

      //editor
      const html = props.event.description;
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
      startDate,
      endDate,
      shortDescription,
      editorState,
      imageLink,
      uploadingImage: false,
      address
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  changeHandler = (name, event) => {
    this.setState({
      [name]: event.target.value
    });
  }

  changeImageHandler = event => {
    this.setState({ uploadingImage: true });

    var formData = new FormData();
    formData.append("file", event.target.files[0]);

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

  onSubmitHandler = e => {
    e.preventDefault();

    const title = this.state.title;
    const startDate = this.state.startDate;
    const endDate = this.state.endDate;

    if (title === "" || startDate === "" || endDate === "") {
      return;
    }

    let event = {
      title,
      startDate,
      endDate,
      imageLink: this.state.imageLink,
      shortDescription: this.state.shortDescription,
      address: this.state.address,
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
              onChange={this.changeHandler.bind(this, "title")}
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
              margin="dense"
              id="datetime-local"
              label="Fecha inicial"
              type="datetime-local"
              value={this.state.startDate}
              onChange={this.changeHandler.bind(this, "startDate")}
              error={this.state.startDate === ""}
              helperText={this.state.startDate === "" ? "Valor Requerido" : ""}
              required
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              className={classes.textField}
              margin="dense"
              id="datetime-local"
              label="Fecha final"
              type="datetime-local"
              value={this.state.endDate}
              onChange={this.changeHandler.bind(this, "endDate")}
              error={this.state.endDate === ""}
              helperText={this.state.endDate === "" ? "Valor Requerido" : ""}
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
              onChange={this.changeHandler.bind(this, "shortDescription")}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              className={classes.textfield}
              margin="dense"
              label="Dirección"
              type="text"
              fullWidth
              value={this.state.address}
              onChange={this.changeHandler.bind(this, "address")}
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
