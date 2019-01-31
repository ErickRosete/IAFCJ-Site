import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogEntry from "./BlogEntry/BlogEntry";

const BlogEntriesList = props => {
  return (
    <div className="blog__blog-list">
      <Container>
        <Row>
          {props.BlogEntries.map(entry => {
            return (
              <Col key={entry._id} xs={12} md={6}>
                <Link to={`/blog/${entry._id}`}>
                  <BlogEntry BlogEntry={entry} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogEntriesList;
