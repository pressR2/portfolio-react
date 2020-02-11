import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Leftchevron from "./logo1";
import Rightchevron from "./logo2";

class FeaturedWork extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    let selectProject = this.props.selectProject;
    let projectsImage = this.props.pics;
    var settings = {
      //   dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true
    //   waitForAnimate: true
    //   focusOnSelect: true
    //   centerMode: true,
    //   centerPadding: '60px',
      
    };
    return (
      <div className="post-slider">
        <div className="icon-previous" onClick={this.previous}>
          <Leftchevron />
        </div>
        <div className="icon-next" onClick={this.next}>
          <Rightchevron />
        </div>
        <div className="post-wrapper">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.projects.map(function(project) {
              let oneImage = projectsImage(project.image);

              return (
                <img
                  className="post animate"
                  key={project.image}
                  src={oneImage}
                  alt=""
                  onClick={(function(project) {
                    return function() {
                      selectProject(project);
                    };
                  })(project)}
                ></img>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeaturedWork;
