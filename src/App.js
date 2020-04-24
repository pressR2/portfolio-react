import React, { Component } from "react";
import "./App.css";
import "./AppResponsive.css";
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";
import AboutMe from "./aboutMe.js";
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
    menuHasClass: false,
  };

  menuHandling() {
    this.setState({ menuHasClass: !this.state.menuHasClass });
  }

  selectProject(project) {
    this.setState({
      project: project,
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
      <div className="main-wrapper">
        <MediaQuery query="(max-device-width: 973px)">
          <div>
            <Hamburger menuHandling={this.menuHandling} />
          </div>
        </MediaQuery>
        <div className="flex-content">
          <main className="main">
            <section>
              <div className="main-content">{contentToDisplay}</div>
              <ProjectsWebTechnologies
                webTechnologies={this.state.project.webIcons}
                gitHubLink={this.state.project.gitHubLink}
                selectDescription={this.state.project.description}
              />
            </section>
          </main>
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