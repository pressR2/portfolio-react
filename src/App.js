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
    this.menuHandling = this.menuHandling.bind(this);
  }

  state = {
    project: data.projects[0],
    menuHasClass: false
  };

  menuHandling() {
    this.setState({menuHasClass: !this.state.menuHasClass});
  }

  selectProject(project) {
    this.setState({
      project: project
    });
  }

  render() {
    let menuClass = this.state.menuHasClass ? "open" : "close";
    let contentToDisplay = (
      <ProjectsPresentation selectVideo={this.state.project.video} />
    );

    if (this.state.project.video === "") {
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
            <Hamburger menuHandling={this.menuHandling}/>
          </div>
        </MediaQuery>
        <div className="flex-content">
          <div className="main-wrapper">
            <main className="main-content">{contentToDisplay}</main>
            <ProjectsWebTechnologies
              webTechnologies={this.state.project.webIcons}
              selectDescription={this.state.project.description}
            />
          </div>
          <MediaQuery query="(max-device-width: 973px)">
            <nav id="menu" className={menuClass}>
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                currentProject={this.state.project}
              />
            </nav>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 974px)">
            <nav className="menu">
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                currentProject={this.state.project}
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
