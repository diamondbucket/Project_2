import React, { useState } from "react";
import logo_2 from "../assets/logo_2.svg";
import Navbar from "../components/responsive_mini_nav";
import Circle from "../components/Circle";
import bottle from "../assets/bottle_with_top_high_res.png";

const ConcentricCircles = ({ circles }) => {
  return (
    <div className="relative flex items-center justify-center">
      {circles.map((circle, index) => (
        <Circle key={index} size={circle.size} color={circle.color} />
      ))}
    </div>
  );
};

const HeroPage = () => {
  const [blackCircleSize, setBlackCircleSize] = useState(50);
  const [bottlePosition, setBottlePosition] = useState(
    "top-32 left-1/2 -translate-x-1/2 rotate-12"
  );

  const handleBottleClick = () => {
    setBlackCircleSize(Math.max(window.innerWidth, window.innerHeight) * 2);
    setBottlePosition("top-0 right-10 rotate-0"); // Move bottle up, to the right, and undo rotation
  };

  const circles = [
    { size: 600, color: "rgba(207,207,207,255)" },
    { size: 450, color: "rgba(175,175,173,255)" },
    { size: 300, color: "rgba(120,120,118,255)" },
    { size: blackCircleSize, color: "black" },
  ];

  return (
    <div className="relative h-screen w-screen bg-white overflow-hidden">
      <div className="relative bg-white w-screen h-20 flex flex-row justify-between items-center px-4 border-b-2 border-gray-300">
        <img src={logo_2} alt="Logo" className="w-20 h-auto" />
        <Navbar />
        <button className="bg-black rounded-full w-28 h-10 px-4 text-white flex items-center justify-center">
          <h1>Order Now</h1>
        </button>
      </div>
      <div className="w-auto h-auto flex flex-col items-center cursor-pointer">
        <img
          src={bottle}
          className={`absolute h-[800px] ${bottlePosition} z-10 transition-transform duration-600 ease-out`}
          onClick={handleBottleClick}
        />
      </div>
      <div className="absolute inset-0 flex items-center top-96 justify-center">
        <ConcentricCircles circles={circles} />
      </div>
    </div>
  );
};

export default HeroPage;
