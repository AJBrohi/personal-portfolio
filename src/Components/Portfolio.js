import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { Link } from "react-router-dom";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const featuredProjects = this.props.data.featuredProjects.map(function (featuredProjects) {
      let projectImage = "images/portfolio/" + featuredProjects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <div className="item-content ">
              <Zmage alt={featuredProjects.title} src={projectImage} />
              <div style={{ textAlign: "center" }}>
                <h4>{featuredProjects.title}</h4>
                <p>{featuredProjects.description}</p>
                <p>{featuredProjects.category}</p>
                <p>
                  <a target="_blank" style={{ textAlign: "center" }} href={featuredProjects.live} rel="noreferrer">
                    <button className="linkButton">Live</button>
                  </a>

                  <a target="_blank" style={{ textAlign: "center" }} href={featuredProjects.githubC} rel="noreferrer">
                    <button className="linkButton">Github</button>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works</h1>

              <div id="portfolio-wrapper">
                {featuredProjects}
                <Link to="/projects">
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

export default Portfolio;

// className="bgrid-quarters s-bgrid-thirds cf"