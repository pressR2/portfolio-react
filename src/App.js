import React, { Component } from "react";
import "./App.css";
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";

const images = require.context("../image", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
  }

  state = {
    projectWebIcons: [],
    projectDescription: "",
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
    return (
      <div className="main">
        <div className="flex-content">
          <div className="main-wrapper">
            <main className="main-content">
              <div>
                <ProjectsPresentation 
                  selectVideo={this.state.projectVideo}
                />
              </div>
            </main>
            <article className="project-descripion">
              <div>
                <ProjectsWebTechnologies
                  webTechnologies={this.state.projectWebIcons}
                  selectDescription={this.state.projectDescription}
                />
              </div>
            </article>
          </div>
          <nav className="menu">
            <div>
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                
              />
            </div>
          </nav>
        </div>
        <footer className="footer">
          <p className="footer p">photos by Marta</p>
        </footer>
      </div>
    );
  }
}

export default App;
