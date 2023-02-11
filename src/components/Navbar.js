import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  font-family: Arial, Helvetica, sans-serif;
  height: 55px;
  font-size:18px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  color:white;
  justify-content: space-between;
  background-color:#808080;
  .logo {
    padding: 20px 0;
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
