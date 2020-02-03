import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FeaturedWork extends React.Component {
    render() {
        let projectsImage = this.props.pics;
        var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <Slider {...settings}>
           {this.props.projectsPics.map(function(pic) {
              console.log(pic.image);
              let oneImage = projectsImage(pic.image);
               console.log(oneImage);

             return (
              <div className = 'box' key={pic.image}>
                 <img src={oneImage} alt=''></img>}
               </div>
           )})}
          </Slider>
        );
      }
    //     console.log(typeof(this.props.pics))
 
}

export default FeaturedWork;