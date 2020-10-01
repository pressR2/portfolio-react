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
    let className = location.pathname === projectPath ? "project-image project-image-selected" : "project-image";
    let projectLink= (
      <Link to={projectPath} key={pr.project.image} className="link-wrapper">
        <img
          className={className}
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
    )
        let divClass = "current-link";
        let projectLinkDiv= (<div className={divClass} key={pr.SlideIndex}>{projectLink}</div>); 
        return pr.focusableLink ? projectLinkDiv : projectLink; 
  }

}

const SlideLink = withRouter(SlideLinkWithoutRouter);
export default SlideLink;

