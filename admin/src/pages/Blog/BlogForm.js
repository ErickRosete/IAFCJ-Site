import React, { Component } from "react";
import Form from "../../containers/Blog/Form";
import Spinner from "../../components/Spinner/Spinner";
import Layout from "../../containers/Layout/Layout";
import { Query, Mutation } from "react-apollo";

import {
  GET_BLOGENTRY,
  GET_BLOG,
  EDIT_BLOGENTRY,
  ADD_BLOGENTRY
} from "../../pages/Blog/constants";

class BlogFormPage extends Component {
  componentDidMount() {
    this.id = this.props.match.params.id;
    if (this.id) {
      this.setState({ edit: true });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      return: false
    };
  }

  render() {
    const { edit } = this.state;
    return (
      <Layout
        title={edit ? "Editar entrada de blog" : "Añadir entrada de Blog"}
      >
        {edit ? (
          // Edit
          <Query query={GET_BLOGENTRY} variables={{ id: this.id }}>
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
                    let editedBlogEntryIndex = blog.findIndex(
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
