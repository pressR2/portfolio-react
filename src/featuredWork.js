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
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true
      //   autoplay: true,
      //   autoplaySpeed: 2000,
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
                  className="post"
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
