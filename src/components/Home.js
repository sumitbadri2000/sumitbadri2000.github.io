import "./Home.css";
function Home() {
  return (
    <div className="home" id="home">
      <div className="size">
        <div className="text-1">Hello, Everyone</div>
        <div className="text-2">
          I am <span>Sumit Badri</span>
        </div>
        <div className="text-3">And I'm a Full-Stack Web Developer</div>
        <div className="headings">
          <a
            class="navbar-link"
            href="https://drive.google.com/uc?export=download&id=1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr/view?usp=sharing"
              )
            }>
            <button className="resume">My Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
