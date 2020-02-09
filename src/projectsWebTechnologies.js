import React from "react";

class ProjectsWebTechnologies extends React.Component {
    render() {
        return (
            <div>
            {this.props.webTechnologies.map(function(icons) {
              console.log(icons);
              return (
            <div className="icon" key = {icons} dangerouslySetInnerHTML={{__html:icons}}></div>
              )
            })}
            </div>
        );
    }
}

export default ProjectsWebTechnologies;