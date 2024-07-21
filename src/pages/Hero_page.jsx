import React from "react";
import Logo from "../assets/logo_2.svg";
import { Navbar } from "../components/Navbar";
import ConcentricCircles from "../components/Concentric_circles";
import bottle from "../assets/bottle_with_top_high_res.png";

const Hero_page = () => {
  return (
    <div className="relative bg-white w-screen h-screen">
      <Navbar />
      <div className="translate-y-48">
        <ConcentricCircles />
      </div>
      <img src={bottle} />
    </div>
  );
};

export default Hero_page;
