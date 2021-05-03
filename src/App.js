import React, { Component } from "react";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import $ from "jquery";

import Home from "./Components/Home";
import PortfolioList from "./Components/PortfolioList";
import NotFound from "./Components/NotFound";
import BlogsList from "./Components/BlogsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("G-R5Q7BR4BWT");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/projects">
            <PortfolioList data={this.state.resumeData.portfolio}></PortfolioList>
          </Route>

          <Route path="/blogs">
            <BlogsList data={this.state.resumeData.blogs}></BlogsList>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
