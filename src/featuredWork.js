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
    this.hideMenu = this.hideMenu.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  hideMenu() {
    const menu = document.getElementById("menu");
    menu.classList.removeClass("open");
  }

  render() {
    let selectProject = this.props.selectProject;
    let projectsImage = this.props.pics;
    var settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: this.props.vertical
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

              return (
                <img
                  className="post"
                  key={project.image}
                  src={oneImage}
                  alt=""
                  onClick={(function(project) {
                    return function() {
                      selectProject(project);
                      const menu = document.getElementById("menu");
                      menu.classList.toggle("open");
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
