import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="about-para">
            <p>
              Hello Everyone, I am Sumit Badri, a Full Stack Web Developer
              specializing in the MERN stack. Passionate about creating
              impactful and user-centered applications
            </p>
            <p>
              I bring a collaborative and detail-oriented approach to
              development. Eager to keep learning and stay updated with new
              technologies to enhance my skills and build relevant solutions.
            </p>
          </div>
          <div className="about-skills" id="skill">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "40%" }} />
            </div>

            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "60%" }} />
            </div>

            <div className="about-skill">
              <p>Tailwind CSS</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>MUI</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>Chakra UI</p>
              <hr style={{ width: "70%" }} />
            </div>

            <div className="about-skill">
              <p>BootStrap</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
        <div className="about-right">
          <img src={profile_img} alt="" />
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>

        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>Working in Project</p>
        </div>
      </div>
    </div>
  );
};

export default About;
