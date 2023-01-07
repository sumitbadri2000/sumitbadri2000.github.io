import "./Navbar.css"
function Navbar() {
    return (
        <div className="navbar">
          <div>
            <a href="#home">SUMIT<span>BADRI</span></a>
          </div>
          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#footer">Contact</a>
            <a class="navbar-link" href="https://drive.google.com/uc?export=download&id=1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr">Resume</a>
          </div>
        </div>
    )
}

export default Navbar