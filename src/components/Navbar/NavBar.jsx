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
  /* width: 100%; */
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
`;

// const Nav = styled.nav`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-end;
//   position: fixed;
//   top: 0;
//   z-index: 30;
//   padding: 0.8rem;
//   color: white;
//   background-color: ${(props) => (props.active ? "var(--dark)" : "")};
//   transition: background-color 500ms ease-in;
//   .logo {
//     display: flex;
//     gap: 0.4rem;
//     cursor: pointer;
//     img {
//       height: 70px;
//       width: 70px; 
//       margin-top: 5px;
//     }
//     .app-name {
//       display: flex;
//       font-size: x-large;
//       align-items: flex-end;
//       font-weight: 700;
//     }
//   }
//   .menu-items {
//     display: flex;
//     .mob-icon {
//       display: none;
//     }
//     ul {
//       margin-top: 5px;
//       display: flex;
//       gap: 1rem;
//       font-weight: 400;
//       font-size: x-large;
//       transition: ease all .5s;
//     }
//     li {
//       list-style-type: none;
//       cursor: pointer;
//     }
//   }

// `;

export default NavBar;
