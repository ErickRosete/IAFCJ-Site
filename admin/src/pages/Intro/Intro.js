import React, { Component } from "react";
import IntroForm from "../../containers/Intro/IntroForm";
import IntroVideoForm from "../../containers/Intro/IntroVideoForm"
import AboutForm from "../../containers/Intro/AboutForm"
import Spinner from "../../components/Spinner/Spinner";
import Layout from "../../containers/Layout/Layout";
import { Query, Mutation } from "react-apollo";
import { GET_INTRO, EDIT_INTRO, GET_INTRO_VIDEO, EDIT_INTRO_VIDEO, GET_ABOUT, EDIT_ABOUT } from "./constants";

class IntroFormPage extends Component {
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
                  <IntroForm
                    intro={data.intro}
                    onSubmit={intro => {
                      updateIntro({
                        variables: { ...intro }
                      });
                      alert("Banner guardado")
                    }}
                  />
                )}
              </Mutation>
            );
          }}
        </Query>

        <Query query={GET_ABOUT}>
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
              <Mutation mutation={EDIT_ABOUT}>
                {updateAbout => (
                  <AboutForm
                    about={data.about}
                    onSubmit={about => {
                      updateAbout({
                        variables: { ...about }
                      });
                      alert("About guardado")
                    }}
                  />
                )}
              </Mutation>
            );
          }}
        </Query>

        <Query query={GET_INTRO_VIDEO}>
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
              <Mutation mutation={EDIT_INTRO_VIDEO}>
                {updateIntroVideo => (
                  <IntroVideoForm
                    introVideo={data.introVideo}
                    onSubmit={introVideo => {
                      updateIntroVideo({
                        variables: { ...introVideo }
                      });
                      alert("Video guardado")
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

export default IntroFormPage;
