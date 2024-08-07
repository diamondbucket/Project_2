import React from "react";
import logo_2 from "../assets/logo_2.svg";
import ResponsiveMiniNav from "../components/responsive_mini_nav";
import Navbar from "../components/responsive_mini_nav";

const HeroPage = () => {
  return (
    <div className="relative h-screen w-screen bg-black">
      <div className="relative bg-white w-screen h-20 flex flex-row justify-between items-center px-4 border-b-2  border-gray-300">
        <img src={logo_2} alt="Logo" className="w-20 h-auto" />
        <Navbar />
        <button className="bg-black rounded-full w-28 h-10 px-4 text-white flex items-center justify-center">
          <h1>Order Now</h1>
        </button>
      </div>
    </div>
  );
};

export default HeroPage;
