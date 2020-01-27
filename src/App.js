import React, { Component } from "react";
import './App.css';
import FeaturedWork from "./featuredWork";
import * as data from "./date.json";

class App extends Component {
  
  render () {
    const images = require.context('../image', true);
    // console.log(images);
    // const onePic = images('./project2.png');
    // console.log(onePic);
    return (
      <div>
        {/* <img src = {onePic} alt = 'kura'/> */}
        <FeaturedWork picsName= {data.images} pics={images}/>
      </div>
    )
      
    
  }
}

export default App;
