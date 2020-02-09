import React, { Component } from "react";
import "./App.css";
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";
// import  Leftchevron from './logo1';

const images = require.context("../image", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
  }

  state = {
    projectWebIcons:[]
  };

  selectProject(project) {
    this.setState({
      projectWebIcons: project.webIcons
    });
  }

  render() {
    return (
      <div>
        <main className="main-content">
          <div>
            <ProjectsPresentation />
          </div>
        </main>
        <article className="project-descripion">
          <div>
            <ProjectsWebTechnologies webTechnologies={this.state.projectWebIcons}/>
          </div>
        </article>
        <nav className="menu">
          <div>
            <FeaturedWork projects={data.projects} pics={images} selectProject={this.selectProject}/>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
