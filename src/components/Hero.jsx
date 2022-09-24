import React from "react";
import styled from "styled-components";
import HeroBg from "../Assets/home-bg-1.jpg";
import { siteContent, devices } from "../Contents/SiteContents";

function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="background">
          <img src={HeroBg} alt="" />
        </div>
        {/* <div className="shade"></div> */}
        <div className="content">
          <div className="title">
            <h1>{siteContent.heroTitle}</h1>
            <p>{siteContent.heroParagraph}</p>
          </div>
        </div>
        <div className="form-content">
          <div className="form-search">
            <div className="input-group">
              <label htmlFor="location-search">Where you want to go</label>
              <input
                type="text"
                id="location-search"
                name="location-search"
                placeholder="search here "
              />
            </div>
            <div className="date-container">
              <div className="input-group">
                <label htmlFor="check-in">Check-in</label>
                <input type="date" id="check-in" name="check-in" />
              </div>
              <div className="input-group">
                <label htmlFor="check-out">Check-out</label>
                <input type="date" id="check-out" name="check-out" />
              </div>
            </div>
            <button type="button">Explore Now</button>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 100%;
  height: 100%;
  .background {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    width: 50%;
    position: absolute;
    top: 15%;
    right: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
      h1 {
        font-size: small;
      }
      p{
        margin-top: .3rem;
        font-size: .5rem;
      }
    }
    @media (${devices.mobileM}) {
      top: 17%;
    }
    @media (${devices.mobileL}) {
      top: 19%;
      right: 5%;
      width: 45%;
      .title{
        h1{
          font-size: medium;
        }
        p{
        margin-top: .3rem;
      }
      }
    }
    @media (${devices.tablet}) {
      top: 23%;
      right: 9%;
      width: 40%;
      .title{
        h1{
          font-size: 1.5rem;
        }
        p{
        margin-top: .35rem;
        font-size: .5rem;
        font-weight: 200;
        width: 90%;
        text-align: center;
      }
      }
    }
    @media (${devices.laptop}) {
      top: 27%;
      right: 0;
      width: 45%;
      .title{
        h1{
          font-size: 2rem;
        }
        p{
        margin-top: .5rem;
        font-size: .5rem;
        font-weight: 200;
        width: 75%;
        text-align: center;
      }
      }
    }
    @media (${devices.laptopL}) {
      top: 27%;
      right: 0;
      width: 47%;
      .title{
        h1{
          font-size: 3rem;
        }
        p{
        margin-top: .5rem;
        font-size: .75rem;
        font-weight: 200;
        width: 80%;
        text-align: center;
      }
      }
    }
    @media (${devices.desktop}) {
      top: 26%;
      right: 0;
      width: 45%;
      .title{
        h1{
          font-size: 5rem;
        }
        p{
        margin-top: .5rem;
        font-size: 1.3rem;
        font-weight: 200;
        width: 80%;
        text-align: center;
      }
      }
    }
  }
  .form-search {
      margin-top: .4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .input-group {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: .2rem;
        cursor: pointer;
        label {
          font-size: .7rem;
          color: #03045e;
          cursor: pointer;
        }
        input {
          border: none;
          font-size: .7rem;
          background-color: transparent;
          outline: none;
          text-align: center;
          color: #585656;
        }
      }
      .date-container{
        margin-top: .3rem;
        display: flex;
        flex-flow: row nowrap;
        gap: 2rem;
      }
      button {
        margin-top: .8rem;
        padding: .3rem 0 .3rem 0;
        width: 50%;
        color: #fff;
        background-color: var(--primary);
        border: none;
        border-radius: 0.2rem;
        font-size: .7rem;
        cursor: pointer;
        &:hover{
          filter: brightness(120%);
        }
      }
      @media (${devices.mobileM}) {
          margin-top: 1rem;
          .input-group {
            gap: .3rem;
          }
          .date-container{
            margin-top: .5rem;
          }
          button {
            margin-top: 1.1rem;
          }
      }
      @media (${devices.mobileL}) {
          margin-top: 1.5rem;
          .input-group {
            gap: .4rem;
          }
          .date-container{
            margin-top: .7rem;
          }
          button {
            margin-top: 1.4rem;
          }
      }
      @media (${devices.tablet}) {
        position: absolute;
        top: 38%;
        right: 15%;
        .input-group {
            gap: .6rem;
            label {
              font-size: .8rem;
            }
            input {
              font-size: .8rem;
            }
          }
          .date-container{
            margin-top: .9rem;
          }
          button {
            margin-top: 1.7rem;
            padding: .5rem 0 .5rem 0;
          }
      }
      @media (${devices.laptop}) {
        position: absolute;
        top: 42%;
        right: 16%;
        .input-group {
            gap: 1rem;
            label {
              font-size: .8rem;
            }
            input {
              font-size: .8rem;
            }
          }
          .date-container{
            margin-top: 1rem;
          }
          button {
            margin-top: 1.8rem;
            padding: .7rem 0 .7rem 0;
            font-size: .7rem;
          }
      }
      @media (${devices.laptopL}) {
        position: absolute;
        top: 42%;
        right: 16%;
        .input-group {
            gap: 1rem;
            label {
              font-size: 1.2rem;
            }
            input {
              font-size: 1.2rem;
            }
          }
          .date-container{
            margin-top: 1.5rem;
          }
          button {
            margin-top: 2.2rem;
            padding: 1rem 0 1rem 0;
            font-size: 1rem;
          }
      }
      @media (${devices.desktop}) {
        top: 42%;
        right: 16%;
        .input-group {
            gap: 1rem;
            label {
              font-size: 2.3rem;
            }
            input {
              font-size: 2.3rem;
            }
          }
          .date-container{
            margin-top: 1.5rem;
          }
          button {
            margin-top: 3rem;
            padding: 1.5rem 0 1.5rem 0;
            font-size: 2rem;
          }
      }
    }
    
`;

export default Hero;
