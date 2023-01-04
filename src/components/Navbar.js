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
            <a class="navbar-link" href="https://drive.google.com/file/d/1IySp6jwx3qv_eL3MzYvN-x1lwUNzY9Gz/view?usp=share_link">Resume</a>
          </div>
        </div>
    )
}

export default Navbar