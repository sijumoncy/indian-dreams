import React from 'react'
import styled from "styled-components";
import logo from "../Assets/logo.png";
import { siteContent, devices } from "../Contents/SiteContents";
import CopyRight from './CopyRight';


function Footer() {
  return (
    <FooterSection>
      <div>

        <div className="logo">
          <img src={logo} alt='' />
          <div className="app-name">
            Indian Dreams
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className='mail'>
          <div>
            <input type="text" placeholder='email address' required />
            <button>Query</button>
          </div>
        </div>

      </div>
      <CopyRight />
    </FooterSection>
  )
}

const FooterSection = styled.footer`
    width: 100%;
    height: 50vh;
    margin-top: 1.5rem;
    background-color: #111111;
    div{
        padding-block: .6rem;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        color: #b9b1b1;
        .logo{
          img {
            width: 35px;
            height: 35px;
          }
          .app-name {
            font-size: small;
            font-weight: 500;
            padding-bottom: .2rem;
            &:hover {
              color: white;
            }
          }
          p {
            text-align: center;
            width: 80%;
            font-size: .5rem;
          }
        }
        .mail {
          div{
            display: flex;
            flex-flow: row nowrap;
            gap: .2rem;
            input {
              height: 1.8rem;
              width: 80%;
              outline: none;
              &::placeholder{
                font-size: .7rem;
              }
              &:focus{
                border: 2px solid #1d7eb0;
              }
            }
            button {
              height: 1.8rem;
              padding: .4rem;
              font-size: .7rem;
              color: #ff4a4a;
              background-color: #ffe456;
              border: none;
              &:hover{
                background-color: #ff4a4a;
                color: #ffe456;
              }
            }
          }
        }
    }
`;

export default Footer;