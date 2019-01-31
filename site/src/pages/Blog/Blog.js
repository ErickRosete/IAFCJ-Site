import React, { Component } from "react";
import BlogEntriesList from "../../components/Blog/BlogEntriesList/BlogEntriesList";

export class BlogPage extends Component {
  state = {
    BlogEntries: [
      {
        _id: "1",
        imageLink:
          "https://conceptodefinicion.de/wp-content/uploads/2015/08/naturaleza-2-e1439386596208.jpg",
        title: "Decide Ser Feliz",
        subtitle: "Subtitulo"
      },
      {
        _id: "2",
        imageLink:
          "https://conceptodefinicion.de/wp-content/uploads/2015/08/naturaleza-2-e1439386596208.jpg",
        title: "Decide Ser Feliz",
        subtitle: "Subtitulo"
      },
      {
        _id: "3",
        imageLink:
          "https://conceptodefinicion.de/wp-content/uploads/2015/08/naturaleza-2-e1439386596208.jpg",
        title: "Decide Ser Feliz",
        subtitle: "Subtitulo"
      },
      {
        _id: "4",
        imageLink:
          "https://conceptodefinicion.de/wp-content/uploads/2015/08/naturaleza-2-e1439386596208.jpg",
        title: "Decide Ser Feliz",
        subtitle: "Subtitulo"
      }
    ]
  };
  render() {
    return (
      <div className="blog">
        <h1>Bienvenido a nuestro blog</h1>
        <BlogEntriesList BlogEntries={this.state.BlogEntries} />
      </div>
    );
  }
}

export default BlogPage;
