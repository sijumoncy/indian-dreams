import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar/NavBar";
import Services from "../components/Services";

function Home() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <NavBar />
      <Hero />
      <Services />
    </>
  );
}

export default Home;
