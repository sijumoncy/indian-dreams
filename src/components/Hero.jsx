import React from "react";
import styled from "styled-components";
import HeroBg from "../Assets/home-bg-1.jpg";
import { siteContent } from "../Contents/SiteContents";

function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="background">
          <img src={HeroBg} alt="" />
        </div>
        <div className="shade"></div>
        <div className="content">
          <div className="title">
            <h1>{siteContent.heroTitle}</h1>
            <p>{siteContent.heroParagraph}</p>
          </div>
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
            <div className="input-group">
              <label htmlFor="check-in">Check-in</label>
              <input type="date" id="check-in" name="check-in" />
            </div>
            <div className="input-group">
              <label htmlFor="check-out">Check-out</label>
              <input type="date" id="check-out" name="check-out" />
            </div>
            <button type="button">Explore</button>
          </div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  .background {
    height: 100%;
    img {
      width: 100%;
    }
  }
  .shade {
    width: 100%;
    height: 20%;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0));
    position: absolute;
    top: 0;
  }
  .content {
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 5;
    top: 10vw;
    right: 6vw;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .title {
      h1 {
        margin-bottom: 0.8rem;
        font-size: 2rem;
      }
      p {
        font-size: 0.8rem;
        color: var(--secondary);
      }
    }
    .form-search {
      width: 100%;
      display: flex;
      justify-content: space-around;
      background-color: #fffafa54;
      padding: 0.8rem;
      border-radius: 0.5rem;

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        cursor: pointer;
        label {
          font-size: 0.8rem;
          color: #03045e;
          cursor: pointer;
        }
        input {
          border: none;
          /* border-bottom: 0.01rem solid black; */
          /* border-radius: 0.5rem; */
          background-color: transparent;
          outline: none;
          text-align: center;
          padding: 0.3rem;
        }
      }
      button {
        padding: 0 1rem 0 1rem;
        font-size: 0.8rem;
        color: #fff;
        background-color: var(--primary);
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        &:hover {
          background-color: var(--primary);
          filter: brightness(120%);
        }
      }
    }
  }
`;

export default Hero;
