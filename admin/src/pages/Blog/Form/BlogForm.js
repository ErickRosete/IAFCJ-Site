import React, { Component } from "react";
import Form from "../../../containers/Blog/Form";
import Spinner from "../../../components/Spinner/Spinner";
import Layout from "../../../containers/Layout/Layout";
import Redirect from "react-router-dom/Redirect"
import { Query, Mutation } from "react-apollo";
import {
  GET_BLOGENTRY, GET_BLOG,
  EDIT_BLOGENTRY, ADD_BLOGENTRY
} from "../constants";

class BlogFormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      return: false
    };
  }

  render() {
    return (
      <Layout
        title={this.props.match.params.id ?
          "Editar entrada de blog" : "Añadir entrada de Blog"}
      >

        {this.state.return && <Redirect push to="/blog"></Redirect>}

        {this.props.match.params.id ? (
          // Edit
          <Query query={GET_BLOGENTRY} variables={{ id: this.props.match.params.id }}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;
              return (
                <Mutation
                  mutation={EDIT_BLOGENTRY}
                  update={(cache, { data: { updateBlogEntry } }) => {
                    const { blog } = cache.readQuery({
                      query: GET_BLOG
                    });
                    const editedBlogEntryIndex = blog.findIndex(
                      blogEntry => blogEntry._id === updateBlogEntry._id
                    );
                    blog[editedBlogEntryIndex] = updateBlogEntry;
                    cache.writeQuery({
                      query: GET_BLOG,
                      data: { blog }
                    });
                  }}
                >
                  {updateBlogEntry => (
                    <Form
                      blogEntry={data.blogEntry}
                      onSubmit={blogEntry => {
                        updateBlogEntry({
                          variables: { ...blogEntry }
                        });
                        this.setState({ return: true })
                      }}
                    />
                  )}
                </Mutation>
              );
            }}
          </Query>
        ) : (
            // ADD
            <Mutation
              mutation={ADD_BLOGENTRY}
              update={(cache, { data: { createBlogEntry } }) => {
                const { blog } = cache.readQuery({ query: GET_BLOG });
                blog.push(createBlogEntry);
                cache.writeQuery({
                  query: GET_BLOG,
                  data: { blog }
                });
              }}
            >
              {createBlogEntry => (
                <Form
                  onSubmit={blogEntry => {
                    createBlogEntry({
                      variables: { ...blogEntry }
                    });
                    this.setState({ return: true })
                  }}
                />
              )}
            </Mutation>
          )}
      </Layout>
    );
  }
}

export default BlogFormPage;
