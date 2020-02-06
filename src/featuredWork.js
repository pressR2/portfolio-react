import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Leftchevron from "./logo1";

class FeaturedWork extends React.Component {
  render() {
    let projectsImage = this.props.pics;
    var settings = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="post-slider">
        <svg className="logo">
          <Leftchevron />
        </svg>
        <div className="post-wrapper">
          <Slider {...settings}>
            {this.props.projectsPics.map(function(pic) {
              console.log(pic.image);
              let oneImage = projectsImage(pic.image);
              console.log(oneImage);

              return <img className="post" key={pic.image} src={oneImage} alt=""></img>;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default FeaturedWork;
