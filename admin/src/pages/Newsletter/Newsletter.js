import React, { Component } from "react";
import Layout from "../../containers/Layout/Layout";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import FormLabel from "@material-ui/core/FormLabel";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from "./styles";

export class Newsletter extends Component {
  state = {
    topic: "",
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  changeTopicHandler = event => {
    this.setState({
      topic: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const topic = this.state.topic;
    const body = draftToHtml(
      convertToRaw(this.state.editorState.getCurrentContent())
    );

    if (topic === "" || body === "") {
      return;
    }

    const requestBody = {
      topic,
      body
    };

    fetch("http://localhost:8000/sendNewsletterEmail", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout title="newsletter">
        <form className="newsletter-form" onSubmit={this.onSubmitHandler}>
          <TextField
            required
            autoFocus
            className={classes.textfield}
            margin="dense"
            label="Asunto"
            type="text"
            fullWidth
            value={this.state.topic}
            onChange={this.changeTopicHandler}
            error={this.state.topic === ""}
            helperText={this.state.topic === "" ? "Valor Requerido" : ""}
          />

          <div className={classes.textfield}>
            <FormLabel
              required
              error={!this.state.editorState.getCurrentContent().hasText()}
            >
              Contenido del correo
            </FormLabel>
            <Editor
              editorState={this.state.editorState}
              wrapperClassName={classes.wrapper}
              editorClassName={classes.editor}
              onEditorStateChange={this.onEditorStateChange}
            />
          </div>

          <Button type="submit" variant="contained" color="primary" autoFocus>
            Enviar
          </Button>
        </form>
      </Layout>
    );
  }
}

Newsletter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Newsletter);
