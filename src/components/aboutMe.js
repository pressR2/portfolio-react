import React from "react";
import MediaQuery from "react-responsive";
import aboutMeImage from "../images/author.png";
import codeWarsIcon from "../images/iconfinder_codewars_4691329.svg";
import gitHubIcon from "../images/github-logo.svg";
import mailIcon from "../images/mail.svg";
import aboutMeSmallerImage from "../images/author3.png"

class AboutMe extends React.Component {
  render() {
    return (
      <div className="author-wrapper">
        {/* <MediaQuery query="(max-device-width: 650px)"> */}
            <div className="author-image-box">
              <img className="author-pic" src={aboutMeSmallerImage} alt="Author" />
            </div>
        {/* </MediaQuery> */}
        {/* <MediaQuery query="(min-device-width: 651px)">
            <div className="image-box">
              <img className="author" src={aboutMeImage} alt="Author" />
           </div>
        </MediaQuery>
        */}
        <section aria-label= "Personal information" className="personal-information">
          <hr className="orange-line"></hr>
          <p className="author-name">
            Hi, I'm Marta Drost
          </p>
          <div className="personal-data">
            <div className="personal-item-wrapper">
              <p className="personal-item-title">contact</p>
              <div className="personal-item-icon">
                <img src={mailIcon} alt="" />
              </div>
            </div>
            <p className="personal-item">
              martadrost@protonmail.com
            </p>
            <div className="personal-item-wrapper">
              <p className="personal-item-title">github profile</p>
              <div className="personal-item-icon">
                <img src={gitHubIcon} alt="" />
              </div>
            </div>
            <p className="personal-item">
              <a className="personal-item-link" href={"https://github.com/pressR2"} target="_blank">
                github.com/pressR2
              </a></p>
            <div className="personal-item-wrapper">
              <p className="personal-item-title">codewars profile</p>
              <div className="personal-item-icon">
                <img src={codeWarsIcon} alt="" />
              </div>
            </div>
              <p className="personal-item">
                <a className="personal-item-link" href={"https://www.codewars.com/users/Marta_R2"} target="_blank">
                  codewars.com/users/Marta_R2
                </a></p>
              </div> 
        </section>
      </div>
    );
  }
}

export default AboutMe;
