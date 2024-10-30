import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img
        src={menu_open}
        alt="logo"
        onClick={openMenu}
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt=""
          onClick={closeMenu}
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skill">
            <p onClick={() => setMenu("skill")}>Skills</p>
          </AnchorLink>
          {menu === "skill" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#project">
            <p onClick={() => setMenu("project")}>Projects</p>
          </AnchorLink>
          {menu === "project" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <a
          class="navbar-link"
          // href="https://drive.google.com/uc?export=download&id=1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr/view?usp=sharing"
            )
          }>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
