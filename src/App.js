import React, { Component } from "react";
import "./App.css";
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";
import AboutMe from "./aboutMe.js";
import MetaTags from "react-meta-tags";
import Hamburger from "./hamburger.js";
import MediaQuery from "react-responsive";

const images = require.context("../image", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
  }

  state = {
    projectWebIcons: data.projects[0].webIcons,
    projectDescription: data.projects[0].description,
    projectVideo: ""
  };

  selectProject(project) {
    this.setState({
      projectWebIcons: project.webIcons,
      projectDescription: project.description,
      projectVideo: project.video
    });
  }

  render() {
    let contentToDisplay = (
      <ProjectsPresentation selectVideo={this.state.projectVideo} />
    );
    if (this.state.projectVideo === "") {
      contentToDisplay = <AboutMe />;
    }
    return (
      <div className="main">
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </MetaTags>
        <MediaQuery query="(max-device-width: 973px)">
          <div id="hamburger-menu">
            <Hamburger />
          </div>
        </MediaQuery>
        <div className="flex-content">
          <div className="main-wrapper">
            <main className="main-content">{contentToDisplay}</main>
            <ProjectsWebTechnologies
              webTechnologies={this.state.projectWebIcons}
              selectDescription={this.state.projectDescription}
            />
          </div>
          <MediaQuery query="(max-device-width: 973px)">
            <nav id="menu">
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                vertical={true}
              />
            </nav>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 974px)">
            <nav className="menu">
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                vertical={true}
              />
            </nav>
          </MediaQuery>
        </div>
        <footer className="footer">
          <p className="footer p">Created by Marta</p>
        </footer>
      </div>
    );
  }
}

export default App;
