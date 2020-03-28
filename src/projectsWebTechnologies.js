import React from "react";

class ProjectsWebTechnologies extends React.Component {
  render() {
    // console.log(this.props.selectDescription)
    let linkText = "github";
    if (this.props.gitHubLink === "") {
      linkText = "";
    }
    return (
      <article className="project-description">
        <div className="icons-wrapper">
          {this.props.webTechnologies.map(function(icons) {
            // console.log(icons);
            return (
              <div className="icon" key={icons}>
                <i className={icons}></i>
              </div>
            );
          })}
        </div>
        <div className="description">
          <div className="description-header">
            <h1>{this.props.selectDescription[0]}</h1>
            <a href={this.props.gitHubLink}>{linkText}</a>
          </div>
          <p>{this.props.selectDescription[1]}</p>
        </div>
      </article>
    );
  }
}

export default ProjectsWebTechnologies;
