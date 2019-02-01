import React, { Component } from "react";
import Banner from "../../../components/Banner/Banner";
import "./BlogEntry.css"

export class BlogEntryPage extends Component {
  state = {
    blogEntry: {
      _id: "1",
      imageLink:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      title: "Título de la entrada de blog",
      subtitle: '"Subtítulo dummy text"',
      description: `
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <br /> 
      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`
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
    const { imageLink, title, subtitle, description } = this.state.blogEntry;

    return (
      <div className="blog-entry">
        <Banner returnAddress="/blog" white smTitle img={imageLink} title={title} />
        <h2 className="blog-entry__subtitle">{subtitle}</h2>
        <div className="blog-entry__description-wrapper">
          <div className="blog-entry__description" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <p className="text-right p-4">The id received is {this.state._id}</p>
      </div>
    );
  }
}

export default BlogEntryPage;
