import React from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../Contents/SiteContents";


function CopyRight() {
    return (
        <CopyRightSection>
            <div>
                <a>{siteContent.copyright}</a>
            </div>
        </CopyRightSection>
    )
}

const CopyRightSection = styled.section`
    width: 100%;
    height: 18vh;
    background-color: #000000;
    color: #b9b1b1;
    text-align: center;
    div{
        width: 100%;
        height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000000;
        a{
            font-size: .8rem;
            text-decoration: none;
            &:hover {
                color: white;
            }
        }
    }
`;

export default CopyRight;