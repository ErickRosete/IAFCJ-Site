import React, { Component } from "react";
import BlogEntriesList from "../../components/Blog/BlogEntriesList/BlogEntriesList";
import Banner from "../../components/Blog/Banner/Banner";
import Newsletter from "../../containers/Newsletter/Newsletter";
import Spinner from "../../components/Spinner/Spinner";
import Layout from "../../components/Layout/Layout";

import blogBanner1 from "../../assets/images/Blog/blog-banner1.jpg";
import blogBanner2 from "../../assets/images/Blog/blog-banner2.jpg";

import { Helmet } from "react-helmet";

import { Query } from "react-apollo";
import { GET_BLOG } from "./constants";

import "./Blog.css";

export class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <div className="blog">
          <Helmet>
            <title>Blog - 2da IAFCJ</title>
            <meta
              name="description"
              content="¿Te gustaría conocer más sobre Dios y la iglesia cristiana? Estás en el lugar indicado."
            />
          </Helmet>
          <Banner
            srcSet={`${blogBanner1} 400w, ${blogBanner1} 800w, ${blogBanner1} 1600w`}
            img={blogBanner1}
            phrase='"Cuando ustedes me busquen me encontrarán, siempre y cuando me busquen de todo corazón"'
            author="Jeremias29:13"
          />
          <h1 className="blog__title">Bienvenido a nuestro blog!</h1>

          <Query query={GET_BLOG}>
            {({ loading, error, data }) => {
              if (loading) return <Spinner />;
              if (error) return <p>Error :(</p>;
              return <BlogEntriesList BlogEntries={data.blog} />;
            }}
          </Query>

          <Newsletter />
        </div>
      </Layout>
    );
  }
}

export default BlogPage;
