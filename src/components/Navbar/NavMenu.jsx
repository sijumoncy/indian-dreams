import React from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../../Contents/SiteContents";
import { ReactComponent as HomeIcon } from "../../Assets/Icons/home.svg";
import { ReactComponent as ServiceIcon } from "../../Assets/Icons/service.svg";
import { ReactComponent as LocationIcon } from "../../Assets/Icons/travelLocations.svg";
import { ReactComponent as PackageIcon } from "../../Assets/Icons/travelPackage.svg";
import { ReactComponent as Testimony } from "../../Assets/Icons/testimony.svg";
import { useState } from 'react';

function NavMenu() {

  const [menuActive, setMenuActive] = useState('Home');

  return (
    <NavList>
      <ul>
        {siteContent.menuItems.map((item, index) => (
          <li key={index}>
            {item.iconName === 'Home'
              ? <a href={item.sectionHref}><HomeIcon
                fill={menuActive === item.iconName ? 'green' : ''}
                className="menu-icon"
                onClick={() => setMenuActive(item.iconName)}
                height={20} width={20} /></a>

              : item.iconName === 'Service'
                ? <a href={item.sectionHref}><ServiceIcon
                  fill={menuActive === item.iconName ? 'green' : ''}
                  className="menu-icon"
                  onClick={() => setMenuActive(item.iconName)}
                  height={20} width={20} /></a>

                : item.iconName === 'TravelPackage'
                  ? <a href={item.sectionHref}><PackageIcon
                    fill={menuActive === item.iconName ? 'green' : ''}
                    className="menu-icon"
                    onClick={() => setMenuActive(item.iconName)}
                    height={20} width={20} /></a>

                  : item.iconName === 'Testimony'
                    ? <a href={item.sectionHref}><Testimony
                      fill={menuActive === item.iconName ? 'green' : ''}
                      className="menu-icon"
                      onClick={() => setMenuActive(item.iconName)}
                      height={20} width={20} /></a>

                    : item.iconName === 'TravelLocations'
                      ? <a href={item.sectionHref}><LocationIcon
                        fill={menuActive === item.iconName ? 'green' : ''}
                        className="menu-icon"
                        onClick={() => setMenuActive(item.iconName)}
                        height={20} width={20} /></a>
                      : ''
            }
            <a href={item.sectionHref}>
              <span
                className={menuActive === item.iconName ? 'active-menu-text' : ''}
                onClick={() => setMenuActive(item.iconName)}
              >
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </NavList >
  )
}

const NavList = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    display: grid;
    align-content: center;
    width: 100%;
    height: 3.5rem;
    padding: 0 1rem;
	border-top-left-radius: 1.5rem;
	border-top-right-radius: 1.5rem;
    background: var(--color-white);
	box-shadow: var(--shadow-medium);
    ul{
        color: #000;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;

        li {
            display: flex;
            flex-direction: column;
            align-items: center;
            list-style: none;
            a{
              text-decoration: none;
            span {
                display: none;
                font-size: x-small;
                font-weight: 600;
                line-height: 1rem;

                @media (${devices.mobileM}){
                    display: block;
                }
            }
          }
        }

        @media (${devices.tabletM}){
            display: flex;
            justify-content: center;
            gap: 3rem;
        }

        @media (${devices.tablet}){
            margin-top: 1.2rem;
            li {
                a{
                  .menu-icon{
                    display: none;
                  }
                
                .active-menu-text{
                    color: green;
                    font-weight: 700;
                }
                span {
                    font-size: smaller;
                    font-weight: 300;
                    color: #fff;
                    &:hover {
                        /* color: #fff; */
                        font-weight: 400;
                    }
                }
              }
            }
        }
        @media (${devices.laptop}){
          li {
                span {
                    font-size: smaller;
                    font-weight: 300;
                    color: #fff;
                    &:hover {
                        color: #fff;
                        font-weight: 400;
                    }
                }
              }
        }
        @media (${devices.laptopL}){
            margin-top: 2.5rem;
            li {
              a {

                span {
                  font-size: large;
                }
              }
            }
        }
        @media (${devices.desktop}){
            li {
              a{

                span {
                  font-size: 1.8rem;
                }
              }
            }
        }

    }

    @media (${devices.tablet}){
        position: relative;
        top: 0;
        right: 0;
        width: auto;
        height: auto;
        background: transparent;
        box-shadow: none;
    }

`;

export default NavMenu