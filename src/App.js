import React, { Component } from "react";
import * as data from "./date.json";
import MediaQuery from "react-responsive";
import FeaturedWork from "./components/featuredWork";
import ProjectsDescription from "./components/projectsDescription";
import ProjectsPresentation from "./components/projectsPresentation";
import AboutMe from "./components/aboutMe.js";
import Hamburger from "./components/hamburger.js";
import FeedReader from "./components/feedReader.js";
import "./styles/App.css";
import "./styles/AppResponsive.css";

const images = require.context("../images", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
    this.menuHandling = this.menuHandling.bind(this);
    this.closeMenu= this.closeMenu.bind(this);
  }

  state = {
    project: data.projects[0],
    menuHasClass: false,
  };

  closeMenu() {
    this.setState({ menuHasClass: false});
  }

  menuHandling() {
    this.setState({ menuHasClass: !this.state.menuHasClass });
  }

  selectProject(project) {
    this.setState({
      project: project,
    });
  }

  render() {
    let menuClass = this.state.menuHasClass ? "visible" : "";
    let contentToDisplay = (
      <ProjectsPresentation selectVideo={this.state.project.video} />
    );

    if (this.state.project === data.projects[7]) {
      contentToDisplay = <FeedReader />
    } else if (this.state.project === data.projects[0]) {
      contentToDisplay = <AboutMe />;
    }

    return (
      <div className="main-wrapper">
        <MediaQuery query="(max-device-width: 973px)">
          <div>
            <Hamburger
              menuHandling={this.menuHandling}
             />
          </div>
        </MediaQuery>
        <div className="flex-content">
          <main className="main">
            <section>
              <div className="main-content">{contentToDisplay}</div>
              <ProjectsDescription
                webTechnologies={this.state.project.webIcons}
                gitHubLink={this.state.project.gitHubLink}
                selectDescription={this.state.project.description}
              />
            </section>
          </main>
          <MediaQuery query="(max-device-width: 973px)">
            <nav id="menu" className={menuClass}>
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                currentProject={this.state.project}
                closeMenu={this.closeMenu}
              />
            </nav>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 974px)">
            <nav className="menu">
              <FeaturedWork
                projects={data.projects}
                pics={images}
                selectProject={this.selectProject}
                currentProject={this.state.project}
              />
            </nav>
          </MediaQuery>
        </div>
        <footer className="footer">
          <p className="footer p">Created by Marta</p>
        </footer>
      </div>
    );
  }
}

export default App;