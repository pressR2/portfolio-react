import React from "react";

class ProjectsWebTechnologies extends React.Component {
  render() {
    // console.log(this.props.selectDescription)
    return (
     
        <div>
      <div>
        {this.props.webTechnologies.map(function(icons) {
          console.log(icons);
          return (
            <div
              className="icon"
              key={icons}
              dangerouslySetInnerHTML={{ __html: icons }}
            ></div>
          );
        })}
      </div>
     
        <div>
            <div
            className="description"
            dangerouslySetInnerHTML={{ __html: this.props.selectDescription }}
            ></div>          
        </div>
        </div>
        
    );
  }
}

export default ProjectsWebTechnologies;
