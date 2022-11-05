import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { devices } from "../../Contents/SiteContents";
// import HamBurg from "./HamBurg";
import NavMenu from "./NavMenu";

function NavBar() {

  const [activeNav, setActiveNav] = useState(false)

  // event listner for scroll y
  const changeNavBackground = () => {
    if (window.scrollY >= 30) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);

  return (
    <>
      <Nav activeNav={activeNav}>
        <div className="logo">
          <img src={logo} alt='' />
          <div className="app-name">
            <span className="name-part-1">Indian</span><span className="name-part-2"> Dreams</span>
          </div>
        </div>
        <NavMenu />
      </Nav>
    </>
  );
}

// default is mobileS
const Nav = styled.nav`
  width: 100%;
  position: ${props => props.activeNav ? 'sticky' : 'fixed'};
  top: ${props => props.activeNav & 0};
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .8)); */
  background: ${props => props.activeNav ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .8))' : ''};
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  /* color: #fff; */
  color:${props => props.activeNav ? '#fff' : '#ff4a4a'};
  z-index: 10;
  .logo {
    display: flex;
    align-items: flex-end;
    gap: .3rem;
    img {
      width: 35px;
      height: 35px;
    }
    .app-name {
      font-size: small;
      font-weight: 500;
      .name-part-1{
          color: green;
      }
      .name-part-2{
        color: #ff4a4a;
      }
    }
  }
  @media (${devices.laptopL}){
    .logo{
      img {
        margin: .5rem 0 0 .5rem;
        width: 60px;
        height: 60px;
      }
      .app-name {
        font-size: larger;
      }
    }
  }
  @media (${devices.desktop}){
    .logo{
      img {
        margin: .5rem 0 0 .5rem;
        width: 80px;
        height: 80px;
      }
      .app-name {
        font-size: 1.8rem;
      }
    }
  }
`;

export default NavBar;
