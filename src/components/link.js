import React from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";

class SlideLinkWithoutRouter extends React.Component {
   
  render() {
    const {location} = this.props;
    let pr = this.props;
    let hoverOn = pr.hoverOn;
    let hoverOut = pr.hoverOut;
    let closeMenu = pr.closeMenu;
    let projectPath = pr.project.image.substring(1, pr.project.image.length - 4);
    let imageUrl = pr.pics(pr.project.image);
    let imageOnHoverURL = pr.pics(pr.project.imageOnHover);
         
    return (
      <Link to={projectPath} key={pr.project.image}>
        <img
         className={
            location.pathname === projectPath
              ? "project-image project-image-selected"
              : "project-image"
          }
          src={pr.hoveringImage ? imageOnHoverURL : imageUrl}
          alt={pr.project.description[0]}
          aria-label={`${pr.project.description[0]} ${pr.slideIndex + 1} of ${pr.projects.length}`}

          onMouseOut={(function () {
            return function () {
              hoverOut();
            };
          })()}

          onMouseOver={(function (projectOnHover) {
            return function () {
              hoverOn(projectOnHover);
            };
          })(pr.project)}

          onClick={(function (projectToApply) {
            return function (event) {
              closeMenu();
            };
          })(pr.project)}
        ></img>
      </Link>
    );
  }
}

const SlideLink = withRouter(SlideLinkWithoutRouter);
export default SlideLink;

