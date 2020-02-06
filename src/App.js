import React, { Component } from "react";
import "./App.css";
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";
// import  Leftchevron from './logo1';

const images = require.context("../image", true);

class App extends Component {
  render() {
    // console.log(images);
    // const onePic = images('./project2.png');
    // console.log(onePic);
    return (
      <div>
        <main className="main-content">
          <div>
            <ProjectsPresentation />
          </div>
        </main>
        <article className="project-descripion">
          <div>
            <ProjectsWebTechnologies />
          </div>
        </article>
        <nav className="menu">
          <div>
            <FeaturedWork projectsPics={data.images} pics={images} />
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
