import React from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../../Contents/SiteContents";
import { ReactComponent as HomeIcon } from "../../Assets/Icons/home.svg";
import { ReactComponent as ServiceIcon } from "../../Assets/Icons/service.svg";
import { ReactComponent as LocationIcon } from "../../Assets/Icons/travelLocations.svg";
import { ReactComponent as PackageIcon } from "../../Assets/Icons/travelPackage.svg";
import { ReactComponent as AboutIcon } from "../../Assets/Icons/aboutInfo.svg";
import { useState } from 'react';

function NavMenu() {

    const [menuActive, setMenuActive] = useState('Home');

    return (
        <NavList>
            <ul>
                {siteContent.menuItems.map((item, index) => (
                    <li key={index}>
                        {item.iconName === 'Home'
                            ? <HomeIcon
                                fill={menuActive === item.iconName ? 'green' : ''}
                                className="menu-icon"
                                onClick={() => setMenuActive(item.iconName)}
                                height={20} width={20} />

                            : item.iconName === 'Service'
                                ? <ServiceIcon
                                    fill={menuActive === item.iconName ? 'green' : ''}
                                    className="menu-icon"
                                    onClick={() => setMenuActive(item.iconName)}
                                    height={20} width={20} />

                                : item.iconName === 'TravelPackage'
                                    ? <PackageIcon
                                        fill={menuActive === item.iconName ? 'green' : ''}
                                        className="menu-icon"
                                        onClick={() => setMenuActive(item.iconName)}
                                        height={20} width={20} />

                                    : item.iconName === 'TravelLocations'
                                        ? <LocationIcon
                                            fill={menuActive === item.iconName ? 'green' : ''}
                                            className="menu-icon"
                                            onClick={() => setMenuActive(item.iconName)}
                                            height={20} width={20} />

                                        : item.iconName === 'AboutInfo'
                                            ? <AboutIcon
                                                fill={menuActive === item.iconName ? 'green' : ''}
                                                className="menu-icon"
                                                onClick={() => setMenuActive(item.iconName)}
                                                height={20} width={20} />
                                            : ''
                        }
                        <span
                            className={menuActive === item.iconName ? 'active-menu-text' : ''}
                            onClick={() => setMenuActive(item.iconName)}
                        >
                            {item.name}
                        </span>
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

        @media (${devices.tabletM}){
            display: flex;
            justify-content: center;
            gap: 3rem;
        }

        @media (${devices.tablet}){
            margin-top: 1.2rem;
            li {
                .menu-icon{
                    display: none;
                }
                .active-menu-text{
                    color: #fff;
                    font-weight: 600;
                }
                span {
                    font-size: smaller;
                    font-weight: 400;
                    color: #cac4c4;
                    &:hover {
                        color: #fff;
                    }
                }
            }
        }

        @media (${devices.laptopL}){
            margin-top: 2.5rem;
            li {
                span {
                    font-size: large;
                }
            }
        }
        @media (${devices.desktop}){
            li {
                span {
                    font-size: 1.8rem;
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