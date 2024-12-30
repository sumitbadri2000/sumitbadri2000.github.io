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
              <h1 className="aheading">I am<span> Sumit Badri</span>, 
                Full Stack Web Developer</h1>
              <p className="aheadings">Passionate Full Stack Web Developer with a specialization in MERN stack. Skilled, collaborative and attentive developer with a drive to develop the most relevant products. Always looking forward to learning something new to strengthen skills learned.</p>
            </div>
          </div>
        </div>
    )
}

export default About