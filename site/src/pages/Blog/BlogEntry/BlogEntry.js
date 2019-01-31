import React, { Component } from "react";

export class BlogEntryPage extends Component {
  state = {
    blogEntry: { id: "1", title: "Título de la entrada de blog" }
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.fetchBlogEntry(id);
  }

  fetchBlogEntry = id => {
    console.log(id);

    this.setState({
      id
    });
  };

  render() {
    return (
      <div className="Blog-Entry">
        <h1> {this.state.title}</h1>
        <p>The id received is {this.state.id}</p>
      </div>
    );
  }
}

export default BlogEntryPage;
