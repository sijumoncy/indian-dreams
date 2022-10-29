import React from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../Contents/SiteContents";


function Gallery() {
    return (
        <GallerySection id='gallery'>
            <h4>Trending Locations</h4>
            <div className='gallery-container'>
                {siteContent.gallery.map((item, index) => (
                    <img key={index} src={item.image} alt='No Preview' />
                ))}
            </div>
        </GallerySection>
    )
}

const GallerySection = styled.section`
    max-width: 95%;
    margin: 10px auto;
    h4{
        text-align: center;
        margin-bottom: 1rem;
        @media (${devices.laptopL}){
            font-size: x-large;
        }
        @media (${devices.desktop}){
            font-size: xx-large;
        }
    }
    .gallery-container{
        background-color: #cac6c6b2;
        padding: 1rem;
        border-radius: .5rem;
        columns: 3 250px;
        gap: 1rem;
        @media (${devices.laptop}){
            padding: 2rem;
        }
        @media (${devices.desktop}){
            padding: 4rem;
            border-radius: 1rem;
        }
        img{
            margin-bottom: 10px;
            border-radius: .5rem;
            width: 100%;
            transition: transform .5s ease-in;
            &:hover{
                transform: scale(1.05);
            }
            @media (${devices.desktop}){
                margin-bottom: 20px;
                border-radius: 1rem;
            }
        }
    }
    /* @media (${devices.tabletL}){
        grid-template-columns : repeat(4, 1fr) ;
    } */
`;

export default Gallery