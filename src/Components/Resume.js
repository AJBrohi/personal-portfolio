import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    return (
      <section id="skills">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col bars-container">
              <div className="left">
                <div className="bars">
                  <ul className="skills">
                    <li>
                      <em><span className="listTitle">Languages</span></em>
                    </li>
                    <li>
                      <em>Java</em>
                    </li>
                    <li>
                      <em>Python</em>
                    </li>
                    <li>
                      <em>JavaScript</em>
                    </li>
                    <li>
                      <em>PHP</em>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="middle1">
                <div className="bars">
                  <ul className="skills">
                    <li>
                      <em><span className="listTitle">Front End</span></em>
                    </li>
                    <li>
                      <em>HTML</em>
                    </li>
                    <li>
                      <em>CSS</em>
                    </li>
                    <li>
                      <em>React.js</em>
                    </li>
                    <li>
                      <em>React Native</em>
                    </li>
                    <li>
                      <em>React Redux</em>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="middle2">
                <div className="bars">
                  <ul className="skills">
                    <li>
                      <em><span className="listTitle">Back End</span></em>
                    </li>
                    <li>
                      <em>Node.js</em>
                    </li>
                    <li>
                      <em>Express.js</em>
                    </li>
                    <li>
                      <em>MongoDB</em>
                    </li>
                    <li>
                      <em>MySQL</em>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="right">
                <div className="bars">
                  <ul className="skills">
                    <li>
                      <em><span className="listTitle">Tools</span></em>
                    </li>
                    <li>
                      <em>Rest API</em>
                    </li>
                    <li>
                      <em>Firebase</em>
                    </li>
                    <li>
                      <em>Netlify</em>
                    </li>
                    <li>
                      <em>Heroku</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>


      </section>
    );
  }
}

export default Resume;
