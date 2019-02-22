import React from "react";
import "./BlogEntry.css";

const BlogEntry = props => {
  return (
    <div className="blog__blog-list-entry">
      <div className="blog__blog-list-entry-img-container">
        <img src={props.BlogEntry.imageLink} alt="Blog" />
      </div>
      <div className="blog__blog-list-entry-text-container">
        <h2>{props.BlogEntry.title}</h2>
        <h3>{props.BlogEntry.shortDescription}</h3>
      </div>
    </div>
  );
};

export default BlogEntry;
