import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from "./chevron";
import { Link } from "react-router-dom";

class FeaturedWork extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.sliderNext = this.sliderNext.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  state = {
    projectIndex: 2,
    hoveringElem: {},
  };

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  sliderNext() {
    this.next();
  }

  hoverOn(project) {
    this.setState({
      hoveringElem: project,
    });
  }

  hoverOut() {
    this.setState({
      hoveringElem: {},
    });
  }

  render() {
    let pr = this.props;
    let hoverOn = this.hoverOn;
    let hoverOut = this.hoverOut;

    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      vertical: true,
      arrows: false,
      // accessibility: true,
      afterChange: (index) => this.setState({ projectIndex: index + 2 }),
    };

    return (
      <div
        className="carousel"
        // aria-label="Projects list"
      >
        <div className="carousel-inner">
          <button
            className="previous-slide"
            onClick={this.previous}
            aria-label="Previous Slide"
          >
            <Chevron />
          </button>
          <div aria-live="polite">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              {this.props.projects.map(
                function (project, index) {
                  let projectIndex = index;
                  let projectPath = project.image.substring(1, project.image.length - 4);
                  let imageUrl = pr.pics(project.image);
                  let imageOnHoverURL = pr.pics(project.imageOnHover);
                  let imageClass = "project-image";

                  if (project === this.state.hoveringElem) {
                    imageUrl = imageOnHoverURL;
                  }

                  if (project === this.props.currentProject) {
                    imageClass = "project-image project-image-selected";
                  }

                  return (
                    <Link
                      to={projectPath}
                      key={project.image}
                      role="group"
                      aria-label={`${projectIndex + 1} of ${pr.projects.length}`}>
                      <img
                        className={imageClass}
                        src={imageUrl}
                        alt={project.description[0]}

                        onMouseOut={(function () {
                          return function () {
                            hoverOut();
                          };
                        })()}

                        onMouseOver={(function (projectOnHover) {
                          return function () {
                            hoverOn(projectOnHover);
                          };
                        })(project)}

                        onClick={(function (projectToApply) {
                          return function (event) {
                            pr.closeMenu();
                          };
                        })(project)}
                      ></img>
                    </Link>
                  );
                }.bind(this)
              )}
            </Slider>
          </div>
          <button
            className="next-slide"
            onClick={this.next}
            aria-label="Next Slide"
          >
            <Chevron />
          </button>
        </div>
      </div>
    );
  }
}

export default FeaturedWork;
