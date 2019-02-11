import React, { Component } from "react";
import { EditorState, ContentState } from "draft-js";
// import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

import Spinner from "../../components/Spinner/Spinner";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./BlogForm.css";

import Layout from "../../containers/Layout/Layout";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_BLOGENTRY = gql`
  query BlogEntry($id: ID!) {
    blogEntry(id: $id) {
      _id
      title
      imageLink
      subtitle
      shortDescription
      description
    }
  }
`;

export class BlogFormPage extends Component {
  componentDidMount() {
    this.id = this.props.match.params.id;
    if (this.id !== null && this.id !== undefined) {
      this.setState({ edit: true });
    }
  }

  constructor(props) {
    super(props);
    this.titleEl = React.createRef();

    this.state = {
      edit: false,
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { edit, editorState } = this.state;
    return (
      <Layout
        title={edit ? "Editar entrada de blog" : "Añadir entrada de Blog"}
      >
        <Query query={GET_BLOGENTRY} variables={{ id: this.id }}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error) return <p>Error :(</p>;

            console.log(data);
            // this.titleEl.value = data.blogEntry.title;
            // this.imageEl.value = data.blogEntry.imageLink;
            // this.shortDescEl.value = data.blogEntry.shortDescription;
            // this.subtitleEl.value = data.blogEntry.subtitle;
            //set description
            const html = data.blogEntry.description;
            const contentBlock = htmlToDraft(html);
            if (contentBlock) {
              const contentState = ContentState.createFromBlockArray(
                contentBlock.contentBlocks
              );
              const editorStateWithContent = EditorState.createWithContent(
                contentState
              );

              //if empty
              if (!editorState.getCurrentContent().hasText()) {
                this.setState({
                  editorState: editorStateWithContent
                });
              }
            }

            return (
              <form className="blog-form">
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
              </form>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default BlogFormPage;
