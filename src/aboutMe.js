import React from "react";
import aboutMeImage from "./image2.PNG";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe-wrapper">
        <figure className="aboutMe-img">
          <img src={aboutMeImage} alt="Author's" />
        </figure>
        <section className="aboutMe-content">
          <hr></hr>
          <h2>Hi, I'm Marta Drost</h2>
          <h3>contact</h3>
          <p>martadrost@protonmail.com</p>
          <h3>github profile</h3>
          <a role="link" href={"https://github.com/pressR2"}>github.com/pressR2</a>
          <h3>codewars profile</h3>
          <a role="link" href={"https://www.codewars.com/users/Marta_R2"}>
            codewars.com/users/Marta_R2
          </a>
        </section>
      </div>
    );
  }
}

export default AboutMe;

