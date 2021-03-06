import React from "react";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";

class SlideLinkWithoutRouter extends React.Component {

  state = {
    hoveringElem: false
  };

  hoverOn = () => {
    this.setState({
      hoveringElem: true
    });
  }

  hoverOut = () => {
    this.setState({
      hoveringElem: false
    });
  }
   
  render() {
    const {location} = this.props;
    let pr = this.props;
    let closeMenu = pr.closeMenu;
    let projectPath = pr.project.image.substring(1, pr.project.image.length - 4);
    let imageUrl = pr.pics(pr.project.image);
    let imageOnHoverURL = pr.pics(pr.project.imageOnHover);
    let className = location.pathname === projectPath ? "project-image project-image-selected" : "project-image";
    let projectLink= (
      <Link to={projectPath} key={pr.project.image} className="link-wrapper">
        <img
          className={className}
          src={this.state.hoveringElem ? imageOnHoverURL : imageUrl}
          alt={pr.project.description[0]}
          aria-label={`${pr.project.description[0]} ${pr.slideIndex + 1} of ${pr.projects.length}`}

          onMouseOut={(() => {
            return () => {
              this.hoverOut();
            };
          })()}

          onMouseOver={(() => {
            return () => {
              this.hoverOn();
            };
          })()}

          onClick={(() => {
            return () => {
              closeMenu();
            };
          })()}
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