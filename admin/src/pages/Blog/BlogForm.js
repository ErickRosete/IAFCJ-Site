import React, { Component } from "react";
import { EditorState, ContentState } from "draft-js";
// import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./BlogForm.css";

export class BlogFormPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    if (id == null) {
      if (this.props.title !== "Agregar entrada de blog") {
        this.props.changeTitle("Agregar entrada de blog");
      }
    } else {
      if (this.props.title !== "Editar entrada de blog") {
        this.props.changeTitle("Editar entrada de blog");
      }
      this.fetchBlogEntry(id);
    }
  }

  fetchBlogEntry = id => {
    console.log(id);
  };

  constructor(props) {
    super(props);
    const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState
      };
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="blog-form">
        <label>Contenido del blog </label>
        <Editor
          editorState={editorState}
          wrapperClassName="wrapper"
          editorClassName="editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}

export default BlogFormPage;
