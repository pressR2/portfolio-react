import React from "react";

class ProjectsWebTechnologies extends React.Component {
  render() {
    // console.log(this.props.selectDescription)
    return (
      <article className="project-descripion">
        <div className="icons-wrapper">
          {this.props.webTechnologies.map(function(icons) {
            console.log(icons);
            return (
              <div className="icon" key={icons}>
                <i className={icons}></i>
              </div>
            );
          })}
        </div>
        <div className="description">
          <h1>{this.props.selectDescription[0]}</h1>
          <p>{this.props.selectDescription[1]}</p>
        </div>
      </article>
    );
  }
}

export default ProjectsWebTechnologies;
