import "./About.css";

function About(){
    return (
        <div id="about" className="about">
          <h1 className="text">ABOUT ME</h1>
          <div className="flex">
            <div>
              <img src="https://avatars.githubusercontent.com/u/110050319?s=400&u=e65eff758ba23a83bc5dcc94bfe43c040d3a5704&v=4" alt="" srcSet />
            </div>
            <div>
              <p className="aheadings add">Hello, Everyone </p>
              <h1 className="aheading">I am Sumit Badri,<br />
                Full Stack Web Developer</h1>
              <p className="aheadings">And I am student of Masai School. I am positive, enthusiastic and competent Web Developer has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role.</p>
            </div>
          </div>
        </div>
    )
}

export default About