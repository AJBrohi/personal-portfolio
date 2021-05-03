import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

let id = 0;
class PortfolioList extends Component {
    render() {
        if (!this.props.data) return null;

        const allProjects = this.props.data.allProjects.map(function (allProjects) {
            let projectImage = "images/portfolio/" + allProjects.image;

            return (
                <div key={id++} className="columns portfolio-item">
                    <div className="item-wrap">
                        <div className="item-content ">
                            <Zmage alt={allProjects.title} src={projectImage} />
                            <div style={{ textAlign: "center" }}>
                                <h4>{allProjects.title}</h4>
                                <p>{allProjects.description}</p>
                                <p>{allProjects.category}</p>
                                <p>
                                    <a target="_blank" style={{ textAlign: "center" }} href={allProjects.live} rel="noreferrer">
                                        <button className="linkButton">Live</button>
                                    </a>

                                    <a target="_blank" style={{ textAlign: "center" }} href={allProjects.githubC} rel="noreferrer">
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
                {/* <Navbar></Navbar> */}
                <Fade left duration={1000} distance="40px">
                    <div className="row">
                        <div className="twelve columns collapsed">
                            <h1>My Projects</h1>
                            <div id="portfolio-wrapper">
                                {allProjects}
                            </div>
                            <Link to="/">
                                <button style={{ margin: '30px', borderRadius: '10px' }}>Back To Home</button>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </section>
        );
    }
}

export default PortfolioList;

// className="bgrid-quarters s-bgrid-thirds cf"