import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import { siteContent } from "../Contents/SiteContents";

function NavBar() {
  const [active, setActive] = useState(false);

  // event listner for scroll y
  const changeNavBackground = () => {
    if (window.scrollY >= 30) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);

  return (
    <>
      <Nav active={active}>
        <div className="logo">
          <img src={logo} />
          <div className="app-name">{siteContent.appName}</div>
        </div>
        <div className="menu-items">
          <ul>
            {siteContent.menuItems.map((item, indx) => (
              <li className="" key={indx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 30;
  padding: 0.8rem;
  color: white;
  background-color: ${(props) => (props.active ? "var(--dark)" : "")};
  transition: background-color 500ms ease-in;
  .logo {
    display: flex;
    gap: 0.4rem;
    cursor: pointer;
    img {
      height: 50px;
      width: 50px;
    }
    .app-name {
      display: flex;
      align-items: flex-end;
      font-weight: 700;
    }
  }
  .menu-items {
    ul {
      display: flex;
      gap: 1rem;
      font-weight: 400;
      font-size: medium;
    }
    li {
      list-style-type: none;
      cursor: pointer;
    }
  }
`;

export default NavBar;
