import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chevron from "./Chevron.js";
import SlideLink from "./SlideLinkWithoutRouter.js";


class ProjectsSlider extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOut = this.hoverOut.bind(this);
  }

  state = {
    focusableProjectIndex: 0,
    hoveringElem: {},
  };

  next() {
    this.slider.slickNext();
    this.setState({
      focusableProjectIndex: (this.state.focusableProjectIndex + 1) % this.props.projects.length
    });
    this.fixFocus();
  }

  previous() {
    this.slider.slickPrev();
    this.setState({
      focusableProjectIndex: this.state.focusableProjectIndex === 0 ? this.props.projects.length : this.state.focusableProjectIndex - 1
    });
    this.fixFocus();
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
    let hoverOn = this.hoverOn;
    let hoverOut = this.hoverOut;
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
                function (project, index) {
                   return (<SlideLink
                      project={project}
                      pics={pr.pics}
                      slideIndex={index}
                      hoveringImage={project === this.state.hoveringElem}
                      hoverOn={hoverOn}
                      hoverOut={hoverOut}
                      closeMenu={pr.closeMenu}
                      projects={pr.projects}
                      focusableLink={index === this.state.focusableProjectIndex}>
                    </SlideLink>)       
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

export default ProjectsSlider;
