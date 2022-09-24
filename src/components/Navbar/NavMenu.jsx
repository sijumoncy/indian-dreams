import React from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../../Contents/SiteContents";
import { ReactComponent as HomeIcon } from "../../Icons/home.svg";
import { ReactComponent as ServiceIcon } from "../../Icons/service.svg";
import { ReactComponent as LocationIcon } from "../../Icons/travelLocations.svg";
import { ReactComponent as PackageIcon } from "../../Icons/travelPackage.svg";
import { ReactComponent as AboutIcon } from "../../Icons/aboutInfo.svg";
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
                                onClick={() => setMenuActive(item.iconName)}
                                height={20} width={20} />

                            : item.iconName === 'Service'
                                ? <ServiceIcon
                                    fill={menuActive === item.iconName ? 'green' : ''}
                                    onClick={() => setMenuActive(item.iconName)}
                                    height={20} width={20} />

                                : item.iconName === 'TravelPackage'
                                    ? <PackageIcon
                                        fill={menuActive === item.iconName ? 'green' : ''}
                                        onClick={() => setMenuActive(item.iconName)}
                                        height={20} width={20} />

                                    : item.iconName === 'TravelLocations'
                                        ? <LocationIcon
                                            fill={menuActive === item.iconName ? 'green' : ''}
                                            onClick={() => setMenuActive(item.iconName)}
                                            height={20} width={20} />

                                        : item.iconName === 'AboutInfo'
                                            ? <AboutIcon
                                                fill={menuActive === item.iconName ? 'green' : ''}
                                                onClick={() => setMenuActive(item.iconName)}
                                                height={20} width={20} />
                                            : ''
                        }
                        <span>{item.name}</span>
                    </li>
                ))}
            </ul>
        </NavList>
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
            list-style: none;
            span {
                display: none;
                font-size: x-small;
                font-weight: 600;
                line-height: 1rem;
            }
        }
    }

`;

export default NavMenu