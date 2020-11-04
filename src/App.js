import React, { Component } from "react";
import * as data from "./date.json";
import MediaQuery from "react-responsive";
import ProjectsSlider from "./components/ProjectsSlider.js";
import ProjectsDescription from "./components/ProjectsDescription.js";
import ProjectsPresentation from "./components/ProjectsPresentation.js";
import AboutMe from "./components/AboutMe.js";
import Hamburger from "./components/Hamburger.js";
import FeedReader from "./components/FeedReader.js";
import "./styles/App.css";
import "./styles/AppResponsive.css";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

const images = require.context("../images", true);

class App extends Component {

  state = {
    menuHasClass: false,
  };

  closeMenu = () => {
    this.setState({ menuHasClass: false });
  }

  menuHandling = () => {
    this.setState({ menuHasClass: !this.state.menuHasClass });
  }

  render() {
    let slider = (
      <ProjectsSlider
        projects={data.projects}
        pics={images}
        closeMenu={this.closeMenu}
      />)
    let mainView = this.state.menuHasClass ? "main blur" : "main";
    let menuMobile = this.state.menuHasClass
      ? "menu-mobile visible"
      : "menu-mobile";

    const projectRoutes = data.projects.map((project, index) => {
      let projectPath = project.image.substring(1, project.image.length - 4);
      let contentToDisplay = (
        <ProjectsPresentation selectVideo={project.video} />
      );

      if (index === 7) {
        contentToDisplay = <FeedReader />;
      } else if (index === 0) {
        contentToDisplay = <AboutMe />;
      }

      return (
        <Route exact path={projectPath} key={index}>
          <main className={mainView} aria-label="Main Content">
            <div className="main-content">{contentToDisplay}</div>
            <ProjectsDescription
              webTechnologies={project.webIcons}
              gitHubLink={project.gitHubLink}
              selectDescription={project.description}
              webPage={project.link}
            />
          </main>
        </Route>
      );
    });
    
    return (  
      <HashRouter>
        <div className="main-wrapper">
          <MediaQuery query="(max-device-width: 973px)">
            <div>
              <Hamburger menuHandling={this.menuHandling} />
            </div>
          </MediaQuery>
          <div className="flex-content">
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/about-me" />}
              />
              {projectRoutes}
            </Switch>
            <MediaQuery query="(max-device-width: 973px)">
              <nav aria-label="Project slider" className={menuMobile}>
                {slider}
              </nav>
            </MediaQuery>

            <MediaQuery query="(min-device-width: 974px)">
              <nav aria-label="Project slider" className="menu">
                {slider}
              </nav>
            </MediaQuery>
          </div>
          <footer className="site-footer" role="contentinfo">
            <p className="footer-text">Created by Marta</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default App;
