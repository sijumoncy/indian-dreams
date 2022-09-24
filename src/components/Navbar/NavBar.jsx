import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/logo.png";
import { siteContent, devices } from "../../Contents/SiteContents";
import HamBurg from "./HamBurg";
import NavMenu from "./NavMenu";

function NavBar() {


  // event listner for scroll y
  // const changeNavBackground = () => {
  //   if (window.scrollY >= 30) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };
  // window.addEventListener("scroll", changeNavBackground);

  return (
    <>
      <Nav >
        <div className="logo">
          <img src={logo} alt='' />
          <div className="app-name">
            Indian Dreams
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
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, .8));;
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
  color: #fff;
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
