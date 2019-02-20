import React, { Component } from "react";
import Banner from "../../../components/Banner/Banner";
import { Helmet } from "react-helmet";

import { Query } from "react-apollo";
import { GET_BLOGENTRY } from "../constants";
import Spinner from "../../../components/Spinner/Spinner";

import Layout from "../../../components/Layout/Layout";

import "./BlogEntry.css";

export class BlogEntryPage extends Component {
  startReftagger = () => {
    if (typeof window !== "undefined" && window !== null) {
      if (window.refTagger == null) {
        window.refTagger = {
          settings: {
            bibleVersion: "NVI",
            socialSharing: ["twitter", "facebook"],
            roundCorners: true,
            customStyle: {
              heading: {
                backgroundColor: "#ffffff"
              },
              body: {
                moreLink: {
                  color: "#f7bd1d"
                }
              }
            }
          }
        };
        const script = document.createElement("script");
        script.src = "//api.reftagger.com/v2/RefTagger.es.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        window.refTagger.tag();
      }
    }
  };

  render() {
    return (
      <Layout>
        <Query
          query={GET_BLOGENTRY}
          variables={{ id: this.props.match.params.id }}
          onCompleted={this.startReftagger}
        >
          {({ loading, error, data }) => {
            if (loading) return <Spinner />;
            if (error) return <p>Error :(</p>;
            const {
              imageLink,
              title,
              subtitle,
              description,
              shortDescription
            } = data.blogEntry;

            return (
              <div className="blog-entry">
                <Helmet>
                  <title>{title} - 2da IAFCJ</title>
                  <meta
                    name="description"
                    content={
                      shortDescription
                        ? shortDescription
                        : `Entrada de blog de IAFCj - ${title}`
                    }
                  />
                </Helmet>
                <Banner
                  returnAddress="/blog"
                  white
                  smTitle
                  img={imageLink}
                  title={title}
                />
                <h2 className="blog-entry__subtitle">{subtitle}</h2>
                <div className="blog-entry__description-wrapper">
                  <div
                    className="blog-entry__description"
                    dangerouslySetInnerHTML={{
                      __html: description
                    }}
                  />
                </div>
              </div>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default BlogEntryPage;
