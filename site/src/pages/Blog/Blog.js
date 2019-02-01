import React, { Component } from "react";
import BlogEntriesList from "../../components/Blog/BlogEntriesList/BlogEntriesList";
import Banner from "../../components/Blog/Banner/Banner"
import Newsletter from "../../containers/Newsletter/Newsletter"

import BannerImg from "../../assets/images/Blog/blog-banner.jpg"

import "./Blog.css"

export class BlogPage extends Component {
  state = {
    BlogEntries: [
      {
        _id: "1",
        imageLink:
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        title: "Decide Ser Feliz",
        subtitle: "Subtitulo"
      },
      {
        _id: "2",
        imageLink:
          "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80",
        title: "Decide Ser Feliz 2",
        subtitle: "Subtitulo"
      },
      {
        _id: "3",
        imageLink:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "Decide Ser Feliz 3",
        subtitle: "Subtitulo"
      },
      {
        _id: "4",
        imageLink:
          "https://images.unsplash.com/photo-1540202403-b7abd6747a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        title: "Decide Ser Feliz 4",
        subtitle: "Subtitulo"
      },
      {
        _id: "5",
        imageLink:
          "https://images.unsplash.com/photo-1487530903081-59e0e3331512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
        title: "Decide Ser Feliz 5",
        subtitle: "Subtitulo"
      },
      {
        _id: "6",
        imageLink:
          "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        title: "Decide Ser Feliz 6",
        subtitle: "Subtitulo"
      }

    ]
  };
  render() {
    return (
      <div className="blog">
        <Banner img={BannerImg} phrase='"Frase bonita Lorem Ipsum Algo"' author="-José Perez"></Banner>
        <h1 className="blog__title">Bienvenido a nuestro blog!</h1>
        <BlogEntriesList BlogEntries={this.state.BlogEntries} />
        <Newsletter />
      </div>
    );
  }
}

export default BlogPage;
