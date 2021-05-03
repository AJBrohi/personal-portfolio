import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

let id = 0;
class BlogsList extends Component {
  render() {
    if (!this.props.data) return null;

    const allBlogs = this.props.data.allBlogs.map(function (allBlogs) {
      let blogImage = "images/blogs/" + allBlogs.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="item-content">
              <img alt={allBlogs.title} src={blogImage} />
              <div style={{ textAlign: "center" }}>
                <h4>{allBlogs.title}</h4>
                <p>{allBlogs.description}</p>
                <p>
                  <a target="_blank" style={{ textAlign: "center" }} href={allBlogs.link} rel="noreferrer">
                    <button className="linkButton">Read More</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="blogs">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Blogs</h1>

              <div id="portfolio-wrapper">
                {allBlogs}
              </div>
              <Link to="/">
                    <button style={{margin:'30px', borderRadius:'10px'}}>Back To Home</button>
                </Link>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default BlogsList;
