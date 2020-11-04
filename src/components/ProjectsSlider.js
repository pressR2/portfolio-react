import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from "./Chevron.js";
import SlideLink from "./SlideLinkWithoutRouter.js";

class ProjectsSlider extends React.Component {

  state = {
    focusableProjectIndex: 0,
  };

  next = () => {
    this.slider.slickNext();
    this.setState({
      focusableProjectIndex: (this.state.focusableProjectIndex + 1) % this.props.projects.length
    });
    this.fixFocus();
  }

  previous = () => {
    this.slider.slickPrev();
    this.setState({
      focusableProjectIndex: this.state.focusableProjectIndex === 0 ? this.props.projects.length : this.state.focusableProjectIndex - 1
    });
    this.fixFocus();
  }

  fixFocus() {
    let arrOfFocusableLinks = document.getElementsByClassName("current-link");
    for (let i = 0; i < arrOfFocusableLinks.length; i++) {
      if (arrOfFocusableLinks[i].parentNode.parentNode.className === "slick-slide slick-cloned") {
        arrOfFocusableLinks[i].firstChild.tabIndex = -1
      }
    }
  }

  componentDidMount() {
    this.fixFocus();
  }

  componentDidUpdate() {
    this.fixFocus();
  }

  render() {
    let pr = this.props;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: false,
      vertical: true,
      arrows: false,
      accessibility: true
    };
    
    return (
      <div
        className="carousel"
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
                 (project, index) => {
                   return (<SlideLink
                      project={project}
                      pics={pr.pics}
                      key={index}
                      slideIndex={index}
                      closeMenu={pr.closeMenu}
                      projects={pr.projects}
                      focusableLink={index === this.state.focusableProjectIndex}>
                    </SlideLink>)       
                }
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

export default ProjectsSlider;
