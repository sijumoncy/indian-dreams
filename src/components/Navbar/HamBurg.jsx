import React from 'react'
import styled from "styled-components";


function HamBurg() {
    return (
        <Ham>
            <div></div>
            <div></div>
            <div></div>
        </Ham>
    )
}

const Ham = styled.div`
    position: absolute;
    right: 10px;
    top: 20px;
    z-index: 60;
    display: flex;
    flex-flow: column nowrap;
    gap: .4rem;
    justify-content: center;
    div {
        height: 2px;
        width: 30px;
        background: #fff;
    }
`;

export default HamBurg