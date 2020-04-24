import React from "react";

class ProjectsWebTechnologies extends React.Component {
  render() {
    let linkText = "github";
    let githubLink = (
      <a className="github-repo" href={this.props.gitHubLink}>
        {linkText}
      </a>
    );
    if (this.props.gitHubLink === "") {
      githubLink = <div></div>;
    }
    return (
      <div aria-label="Project presentation" className="project-presentation">
        <div aria-label="Project web technologies" className="icons-wrapper">
          {this.props.webTechnologies.map(function (icons) {
            // console.log(typeof(icons));
            let iconText = icons.split("-");
            return (
              <div className="icon" key={icons}>
                <i className={icons} aria-label={iconText[1]}></i>
              </div>
            );
          })}
        </div>
        <article aria-label="Project description" className="project-description">
          <header className="title-and-link">
            <h1 className="project-title">{this.props.selectDescription[0]}</h1>
            {githubLink}
          </header>
          <p className="description">{this.props.selectDescription[1]}</p>
        </article>
      </div>
    );
  }
}

export default ProjectsWebTechnologies;