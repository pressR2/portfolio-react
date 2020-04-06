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
    let imagesContext = this.props.pics;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      vertical: true
    };
    return (
      <nav className="projects-slider">
        <div className="projects-wrapper">
          <div className="icon-previous" onClick={this.previous}>
            <Chevron />
          </div>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.projects.map(function(project) {
              let imageUrl = imagesContext(project.image);
              console.log(imageUrl);
              let imageClass = "project-image";
                if (project === currentProject) {
                   imageClass = "project-image select-project";
                }
              return (
                  <img
                    className={imageClass}
                    key={project.image}
                    src={imageUrl}
                    alt={project.description[0]}
                    onClick={(function(projectToApply) {
                      return function() {
                        selectProject(projectToApply);
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
      </nav>
    );
  }
}

export default FeaturedWork;