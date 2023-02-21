import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  font-family: Arial, Helvetica, sans-serif;
  li {
    padding: 15px 15px;
    color: white;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    background-color: blue;
    font-size: 20px;
  }
  @media (max-width: 780px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.896);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="#home">
        <li>Home</li>
      </a>
      <a href="#about">
        <li>About</li>
      </a>
      <a href="#skills">
        <li>Skills</li>
      </a>
      <a href="#projects">
        <li>Projects</li>
      </a>
      <a href="#footer">
        <li>Contact</li>
      </a>
      <a
        class="navbar-link"
        href="https://drive.google.com/uc?export=download&id=1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1BiWFYySamZukJAk_cZrY26f4h8Hs2Ncr/view?usp=sharing"
          )
        }>
        <li>Resume</li>
      </a>
    </Ul>
  );
};

export default RightNav;
