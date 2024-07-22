import React from "react";
import Logo from "../assets/logo_2.svg";
import { Navbar } from "../components/Navbar";
import ConcentricCircles from "../components/Concentric_circles";
import bottle from "../assets/bottle_with_top_high_res.png";

const Hero_page = () => {
  return (
    <div className=" w-screen h-1vh overflow-hidden">
      <Navbar />
      <div className="translate-y-16">
        <ConcentricCircles />
      </div>
      <div className="translate-x-80">
        <img
          src={bottle}
          className="-translate-y-full transform rotate-19 translate-x-[300px] h-full"/>
      </div>
    </div>
  );
};

export default Hero_page;
