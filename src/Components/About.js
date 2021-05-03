import React, { Component } from "react";
import Fade from "react-reveal";
import pic from "../images/Bro.jpg";
import pdf from "../images/Md. Al-Junaed Islam's Resume.pdf";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={pic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>I am a final year student in computer science interested in Web Development, Artificial Intelligence and Machine Learning, and Data Science. Additionally, complete a web development internship at RiziqIT Solutions. I am passionate about working with full-stack development, software engineering and also fascinated with data analytics.</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                    <br />

                    <ul className="social-links">{networks}</ul>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a download="" href={pdf} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
