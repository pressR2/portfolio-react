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
    let numberOfProjects = this.props.projects;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      vertical: true,
      arrows: false,
      accessibility: true
    };
    return (
      <section
        className="carousel"
        aria-roledescription="carousel"
        aria-label="Projects list"
      >
        <div className="carousel-inner">
          <div
            className="previous"
            onClick={this.previous}
            role="button"
            aria-label="Previous Slide"
            tabIndex={1}
          >
            <Chevron />
          </div>
          <div aria-live="polite">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.projects.map(function (project, index) {
                let projectIndex = index;
                let imageUrl = imagesContext(project.image);
                console.log(imageUrl);
                let imageClass = "project-image";
                if (project === currentProject) {
                  imageClass = "project-image select-project";
                }
                return (
                  <div key={project.image} role="group" aria-roledescription="slide" aria-label={`${projectIndex + 1} of ${numberOfProjects.length}`} >
                    <img tabIndex={projectIndex + 2}
                      className={imageClass}
                      src={imageUrl}
                      alt={project.description[0]}
                      onKeyDown={(function(projectToApply){
                        return function (event) {
                          console.log(event.keyCode);
                          if (event.keyCode === 13 || event.keyCode === 32) {
                            selectProject(projectToApply);
                          }
                        }
                      }
                        )(project)}
                      onClick={(function (projectToApply) {
                        return function (event) {
                          selectProject(projectToApply);
                        };
                      })(project)}
                    ></img>
                  </div>
                );
              })}
            </Slider>
          </div>
          <div
            className="next"
            onClick={this.next}
            role="button"
            aria-label="Next Slide"
            tabIndex={11}
          >
            <Chevron />
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
