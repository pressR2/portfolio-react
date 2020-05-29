import React from "react";
import aboutMeImage from "../images/author.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe-wrapper">
        <figure className="image-box">
          <img className="author" src={aboutMeImage} alt="Author" />
        </figure>
        <section aria-label= "Personal information" className="personal-information">
          <hr className="orange-line"></hr>
          <h2 className="self-introduce">
            Hi, I'm Marta Drost
          </h2>
          <h3 className="personal-item-title">contact</h3>
          <p className="personal-item">
            martadrost@protonmail.com
          </p>
          <h3 className="personal-item-title">github profile</h3>
          <p className="personal-item">
            <a className="title-link" href={"https://github.com/pressR2"}>
              github.com/pressR2
            </a></p>
          <h3 className="personal-item-title">codewars profile</h3>
          <p className="personal-item">
            <a className="title-link" href={"https://www.codewars.com/users/Marta_R2"}>
              codewars.com/users/Marta_R2
            </a></p>
        </section>
      </div>
    );
  }
}

export default AboutMe;
