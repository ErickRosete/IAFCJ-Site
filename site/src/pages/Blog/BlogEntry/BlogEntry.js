import React, { Component } from "react";
import Banner from "../../../components/Banner/Banner";

export class BlogEntryPage extends Component {
  state = {
    blogEntry: {
      _id: "1",
      imageLink:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      title: "Título de la entrada de blog",
      subtitle: "Subtitulo"
    },
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchBlogEntry(id);
  }

  fetchBlogEntry = _id => {
    console.log(_id);

    this.setState({
      _id
    });
  };

  render() {
    const { imageLink, title, subtitle } = this.state.blogEntry;

    return (
      <div className="Blog-Entry">
        <Banner white smTitle img={imageLink} title={title}></Banner>
        <h2>{subtitle}</h2>
        <p>The id received is {this.state._id}</p>
      </div>
    );
  }
}

export default BlogEntryPage;
