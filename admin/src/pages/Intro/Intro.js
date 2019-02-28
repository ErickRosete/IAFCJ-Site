import React, { Component } from "react";
import Form from "../../containers/Intro/Form";
import Spinner from "../../components/Spinner/Spinner";
import Layout from "../../containers/Layout/Layout";
import { Query, Mutation } from "react-apollo";
import { GET_INTRO, EDIT_INTRO } from "./constants";

class BlogFormPage extends Component {
  render() {
    return (
      <Layout title="Editar introducción">
        <Query query={GET_INTRO}>
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error)
              return (
                <p>
                  Error :(, favor de recargar la página, si el error persiste
                  contacta al administrador.
                </p>
              );
            return (
              <Mutation mutation={EDIT_INTRO}>
                {updateIntro => (
                  <Form
                    intro={data.intro}
                    onSubmit={intro => {
                      updateIntro({
                        variables: { ...intro }
                      });
                    }}
                  />
                )}
              </Mutation>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default BlogFormPage;
