import React from "react";
import "./Home.css";
// import profile_img from "../../assets/profile_img.svg";
import profile_img from "../../assets/home.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Home = () => {
  return (
    <div id="home" className="home">
      <img src={profile_img} alt="profile" />
      <p>Hello Everyone</p>
      <h1>
        I am
        <span> Sumit Badri</span>
      </h1>
      <p>And I'm a Full-Stack Web Developer</p>
      <div className="home-action">
        <div className="home-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With me
          </AnchorLink>
        </div>

        <div className="home-resume">
          <a
            class="navbar-link"
            // href="https://drive.google.com/uc?export=download&id=1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr/view?usp=sharing"
              )
            }>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
