import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

let id = 0;
class Blog extends Component {
  render() {
    if (!this.props.data) return null;

    const featuredBlogs = this.props.data.featuredBlogs.map(function (featuredBlogs) {
      let blogImage = "images/blogs/" + featuredBlogs.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="item-content">
              <img alt={featuredBlogs.title} src={blogImage} />
              <div style={{ textAlign: "center" }}>
                <h4>{featuredBlogs.title}</h4>
                <p>{featuredBlogs.description}</p>
                <p>
                  <a target="_blank" style={{ textAlign: "center" }} href={featuredBlogs.link} rel="noreferrer">
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
                {featuredBlogs}

                <Link to="/blogs">
                <button className="portfolioButton">Click for More</button>
              </Link>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Blog;
