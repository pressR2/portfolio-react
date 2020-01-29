import React, { Component } from "react";
import './App.css';
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";
import ProjectsWebTechnologies from "./projectsWebTechnologies";
import ProjectsPresentation from "./projectsPresentation";

const images = require.context('../image', true);

class App extends Component {
  
  render() {
    
    // console.log(images);
    // const onePic = images('./project2.png');
    // console.log(onePic);
    return (
      <div>
      <div>
        <ProjectsPresentation/>
      </div>
      <div>
        <ProjectsWebTechnologies/>
      </div>
      <div>
        {/* <img src = {onePic} alt = 'kura'/> */}
        <FeaturedWork projectsPics= {data.images} pics={images}/>
      </div>
      </div>
    )    
    
  }
}

export default App;
