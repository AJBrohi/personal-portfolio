import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const blogsList = this.props.data.blogsList.map(function (blogsList) {
      let projectImage = "images/portfolio/" + blogsList.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="item-content">
              <Zmage alt={blogsList.title} src={projectImage} />
              <div style={{ textAlign: "center" }}>
                <h4>{blogsList.title}</h4>
                <p>{blogsList.description}</p>
              </div>
            </div>
            <p>
              <a style={{ textAlign: "center" }} href={blogsList.link}>Read More</a>
            </p>
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

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {blogsList}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
