import React from "react";
import aboutMeImage from "./image2.PNG";

class AboutMe extends React.Component {
  render() {
    return (
      <article className="aboutMe-wrapper">
        <div className="aboutMe-img">
          <img src={aboutMeImage} alt="" />
        </div>
        <div className="aboutMe-content">
          <hr></hr>
          <h2>Hi, I'm Marta Drost</h2>
          <h3>contact</h3>
          <p>martadrost@protonmail.com</p>
          <h3>github profile</h3>
          <a href={"https://github.com/pressR2"}>github.com/pressR2</a>
          <h3>codewars profile</h3>
          <a href={"https://www.codewars.com/users/Marta_R2"}>
            codewars.com/users/Marta_R2
          </a>
        </div>
      </article>
    );
  }
}

export default AboutMe;

