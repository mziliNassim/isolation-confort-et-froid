import React from "react";

import Hero from "../components/home/Hero.jsx";
import Services from "../components/home/Services";
import Avantages from "../components/home/Avantages";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <div className="mb-10">
        {/* Hero with video intro */}
        <Hero />

        <div className="w-full mx-auto">
          <Services />
          <Avantages />
          <CTA />
        </div>
      </div>
    </>
  );
};

export default Home;
