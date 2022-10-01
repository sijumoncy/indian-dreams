import React from 'react'
import styled from "styled-components";
import ServiceCard from './Cards/ServiceCard'
import { siteContent, devices } from "../Contents/SiteContents";
import SafeIcon from "../Assets/Icons/safe.svg";
import DiscountIcon from "../Assets/Icons/discount.svg";
import PaymentIcon from "../Assets/Icons/multi-payment.svg";
import RouteIcon from "../Assets/Icons/route.svg";

const Icons = [RouteIcon, SafeIcon, DiscountIcon, PaymentIcon]

function Services() {
    return (
        <ServiceSection>
            {siteContent.services.map((item, index) => (
                <ServiceCard key={index} icon={Icons[index]} head={item.title} content={item.desc} />
            ))}
        </ServiceSection>
    )
}

const ServiceSection = styled.section`
    width: 100%;
    display: grid;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    @media (${devices.tabletM}){
        grid-template-columns : repeat(2, 1fr) ;
    }
    @media (${devices.tabletL}){
        grid-template-columns : repeat(4, 1fr) ;
    }
`;

export default Services