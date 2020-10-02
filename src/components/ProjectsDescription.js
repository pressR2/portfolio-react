import React from "react";
import webPageIcon from "../images/external-link-symbol.svg";
import gitHubIcon from "../images/github-logo.svg"

class ProjectsDescription extends React.Component {
  render() {
    let itemTitle = this.props.selectDescription[0] === "About me" ? "About me" : "Project presentation"
    let itemWebTechnologies = this.props.selectDescription[0] === "About me" ? "Author's skills" : "Web technologies used to build the project"
    let technologiesLabelText = "";
    let linkText = "github";
    let githubLink = (
      <a className="github-repo" href={this.props.gitHubLink} target="_blank">
        {linkText}
      </a>
    );
    let githubIcon = (
      <div className="link-icon">
        <img src={gitHubIcon} alt="" />
      </div>
    )

    let webPageText = "page";
    let webPage = (
      <a className="project-site" href={this.props.webPage} target ="_blank">
        {webPageText}
      </a>
    );
    let webpageLink = (
      <div className="link-icon">
        <img src={webPageIcon} alt="" />
      </div>
    )
   
    if (this.props.gitHubLink === "") {
      githubLink = null;
      githubIcon = null;
      technologiesLabelText="Stuff I use"
    }

    let technologiesLabel = (
      <p className="technologies-label">{technologiesLabelText}</p>
    );

    if (this.props.webPage === "") {
      webPage = null;
      webpageLink = null;
    }


    return (
      <div aria-label= {itemTitle} className="project-presentation">
        <div aria-label={itemWebTechnologies}>
         {technologiesLabel}
          {this.props.webTechnologies.map(function (icons) {
            let iconText = icons.split("-")[1];
            return (
              <div className="web-technologies-icon" key={icons}>
                <i className={icons} aria-label={iconText}></i>
              </div>
            );
          })}
        </div>
        <article aria-label="Description" className="project-description-area">
          <header className="title-and-link">
            <h1 className="project-title">{this.props.selectDescription[0]}</h1>
            <div className="project-links">
            {githubIcon}
            {githubLink}
            {webpageLink}
            {webPage}
            </div>
          </header>
          <p className="project-description">{this.props.selectDescription[1]}</p>
        </article>
      </div>
    );
  }
}

export default ProjectsDescription;