import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  font-family: Arial, Helvetica, sans-serif;
  height: 52px;
  text-align:center;
  width: 100%;
  font-size: 18px;
  position: fixed;
  display: flex;
  color: white;
  justify-content: space-between;
  background-color: blue;
  .logo {
    padding: 20px 15px;
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="logo">
        SUMIT<span>BADRI</span>
      </div>
      <Burger />
    </Nav>
  );
}

export default Navbar;
