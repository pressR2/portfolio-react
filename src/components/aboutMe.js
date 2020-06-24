import React from "react";
import MediaQuery from "react-responsive";
import aboutMeImage from "../images/author.png";
import codeWIcon from "../images/iconfinder_codewars_4691329.svg";
import gitHubIcon from "../images/github-logo.svg";
import mailIcon from "../images/mail.svg";
import aboutMeSmallerImage from "../images/author3.png"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe-wrapper">
        <MediaQuery query="(max-device-width: 650px)">
            <div className="image-box">
              <img className="author" src={aboutMeSmallerImage} alt="Author" />
           </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 651px)">
            <div className="image-box">
              <img className="author" src={aboutMeImage} alt="Author" />
           </div>
        </MediaQuery>
       
        <section aria-label= "Personal information" className="personal-information">
          <hr className="orange-line"></hr>
          <h2 className="self-introduce">
            Hi, I'm Marta Drost
          </h2>
          <div className="personal-data">
            <div className="icon-and-title">
              <h3 className="personal-item-title">contact</h3>
              <div className="title-icon">
                <img src={mailIcon} alt="mail" />
              </div>
            </div>
            <p className="personal-item">
              martadrost@protonmail.com
            </p>
            <div className="icon-and-title">
              <h3 className="personal-item-title">github profile</h3>
              <div className="title-icon">
                <img src={gitHubIcon} alt="git hub" />
              </div>
            </div>
            <p className="personal-item">
              <a className="title-link" href={"https://github.com/pressR2"}>
                github.com/pressR2
              </a></p>
            <div className="icon-and-title">
              <h3 className="personal-item-title">codewars profile</h3>
              <div className="title-icon">
                <img src={codeWIcon} alt="codewars" />
              </div>
            </div>
              <p className="personal-item">
                <a className="title-link" href={"https://www.codewars.com/users/Marta_R2"}>
                  codewars.com/users/Marta_R2
                </a></p>
              </div> 
        </section>
      </div>
    );
  }
}

export default AboutMe;
