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
    this.sliderNext = this.sliderNext.bind(this);
  }

  state = {
    projectIndex: 2
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  sliderNext() {
    this.next();
  }

  render() {
    let selectProject = this.props.selectProject;
    let currentProject = this.props.currentProject;
    let imagesContext = this.props.pics;
    let numberOfProjects = this.props.projects;
    let lastDisplayIndex = this.state.projectIndex;
    let sliderNext = this.sliderNext;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      vertical: true,
      arrows: false,
      accessibility: true,
      afterChange: (index) => this.setState({projectIndex: index + 2
      })
    };
    return (
      <section
        className="carousel"
        aria-roledescription="carousel"
        aria-label="Projects list"
      >
        <div className="carousel-inner">
          <button
            className="previous"
            onClick={this.previous}
            aria-label="Previous Slide"
            tabIndex={1}
          >
            <Chevron />
          </button>
          <div aria-live="polite">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.projects.map(function (project, index) {
                let projectIndex = index;
                let imageUrl = imagesContext(project.image);
                let imageClass = "project-image";
                
                if (project === currentProject) {
                  imageClass = "project-image select-project";
                }
                
                let focus=() => {};
                if (lastDisplayIndex === index) {
                  focus = sliderNext;
                }

                return ( 
                  <div key={project.image} role="group" aria-roledescription="slide" aria-label={`${projectIndex + 1} of ${numberOfProjects.length}`} >
                    <img tabIndex={projectIndex + 2} onBlur={focus}
                      className={imageClass}
                      src={imageUrl}
                      alt={project.description[0]}
                      onKeyDown={(function(projectToApply){
                        return function (event) {
                          if (event.keyCode === 13 || event.keyCode === 32) {
                            selectProject(projectToApply);
                          }
                        }
                      })(project)}
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
          <button
            className="next"
            onClick={this.next}
            aria-label="Next Slide"
            tabIndex={11}
          >
            <Chevron />
          </button>
        </div>
      </section>
    );
  }
}

export default FeaturedWork;
