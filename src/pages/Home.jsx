import React, { useState, useRef, useEffect } from "react";

import Hero from "../components/home/Hero.jsx";
import Services from "../components/home/Services";
import Avantages from "../components/home/Avantages";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <div className="mb-20">
        {/* Hero Section with Video Background */}
        <Hero />

        <div className="w-full md:w-10/12 mx-auto">
          <Services />
          <Avantages />
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;
