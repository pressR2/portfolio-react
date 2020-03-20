import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from "./chevron";

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
    let currentProject = this.props.currentProject;
    console.log(currentProject);
    let projectsImage = this.props.pics;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true
    };
    return (
      <div className="post-slider">
        <div className="post-wrapper">
          <div className="icon-previous" onClick={this.previous}>
            <Chevron />
          </div>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.projects.map(function(project) {
              let oneImage = projectsImage(project.image);
              let imageClass = "post";
                if (project === currentProject) {
                   imageClass = "post post-border";
                }
              return (
                <img
                  className={imageClass}
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
          <div className="icon-next" onClick={this.next}>
            <Chevron />
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedWork;
