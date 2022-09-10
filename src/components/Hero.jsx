import React from "react";
import styled from "styled-components";
import HeroBg from "../Assets/home-bg-1.jpg";

function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="hero-bg">
          <img src={HeroBg} alt="" />
          <div className="overlay-shade"></div>
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  .hero-bg {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    img {
      position: relative;
      width: 100%;
    }
    .overlay-shade {
      position: absolute;
      top: 0;
      height: 30vh;
      width: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
`;

export default Hero;
