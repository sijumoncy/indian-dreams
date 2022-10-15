import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar/NavBar";
import Services from "../components/Services";
import Packages from "../components/Packages";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/gallery";

function Home() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Hero />
      <Services />
      <Packages />
      <Testimonial />
      <Gallery />
    </>
  );
}

export default Home;
