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
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";

const images = require.context("../images", true);

class App extends Component {
  constructor(props) {
    super(props);
    this.menuHandling = this.menuHandling.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  state = {
    menuHasClass: false,
  };

  closeMenu() {
    this.setState({ menuHasClass: false });
  }

  menuHandling() {
    this.setState({ menuHasClass: !this.state.menuHasClass });
  }

  render() {
    let mainView = this.state.menuHasClass ? "main blur" : "main";
    let menuMobile = this.state.menuHasClass
      ? "menu-mobile visible"
      : "menu-mobile";

    const projectRoutes = data.projects.map(function (project, index) {
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
            />
          </main>
        </Route>
      );
    });
    
    return (
      <BrowserRouter>
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
                <FeaturedWork
                  projects={data.projects}
                  pics={images}
                  closeMenu={this.closeMenu}
                />
              </nav>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 974px)">
              <nav aria-label="Project slider" className="menu">
                <FeaturedWork
                  projects={data.projects}
                  pics={images}
                  closeMenu={this.closeMenu}
                />
              </nav>
            </MediaQuery>
          </div>
          <footer className="site-footer" role="contentinfo">
            <p className="footer-text">Created by Marta</p>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
