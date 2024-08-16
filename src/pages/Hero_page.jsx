import React, { useState, useEffect, useRef } from "react";
import logo_2 from "../assets/logo_2.svg";
import Navbar from "../components/responsive_mini_nav";
import Circle from "../components/Circle";
import bottle from "../assets/bottle_with_top_high_res.png";
import Third_page from "./Third_page";
import Footer from "./Footer";
import SecondPage from "./Second_page";

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
  const [showText, setShowText] = useState(false);
  const [isScrollable, setScrollability] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll position
  const scrollableContainerRef = useRef(null); // Reference for the scrollable container

  let currentScrollValue = 0; // Variable to store the scroll value

  const handleBottleClick = () => {
    setBlackCircleSize(Math.max(window.innerWidth, window.innerHeight) * 1.3);
    setBottlePosition(`top-0 right-10 rotate-0`);
    setTimeout(() => setShowText(true), 200); // Delay showing the text to match the circle's animation
    setScrollability(true);
  };

  const handleBottlescroll = () => {
    // Delay showing the text to match the circle's animation
    setBottlePosition(
      `top-0 right-10 translate-y-[750px] -translate-x-[390px] h-[500px] rotate-19`
    );
  };

  const handleScroll_1 = () => {
    if (scrollableContainerRef.current) {
      const scrollTop = scrollableContainerRef.current.scrollTop;
      setScrollPosition(scrollTop); // Update state

      if (scrollTop === 0) {
        setBottlePosition("top-0 right-10 rotate-0"); // Call the function to handle the bottle's position
      } else {
        handleBottlescroll();
        // Other scroll position handling
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableContainerRef.current) {
        const scrollTop = scrollableContainerRef.current.scrollTop;
        setScrollPosition(scrollTop); // Update state
        currentScrollValue = scrollTop; // Store in a variable
        console.log("Current Scroll Value:", currentScrollValue); // Optional: Log to the console
      }
    };

    const container = scrollableContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const circles = [
    { size: 600, color: "rgba(207,207,207,255)" },
    { size: 450, color: "rgba(175,175,173,255)" },
    { size: 300, color: "rgba(120,120,118,255)" },
    { size: blackCircleSize, color: "black" },
  ];

  return (
    <div
      ref={scrollableContainerRef}
      className={`relative h-screen w-screen ${
        isScrollable ? "overflow-y-auto" : "overflow-y-hidden"
      } overflow-x-hidden`}
      onScroll={handleScroll_1}
    >
      <div className="relative h-screen w-screen bg-white">
        <div className="relative bg-white w-screen h-20 flex flex-row justify-between items-center px-4 border-b-2 border-gray-300">
          <img src={logo_2} alt="Logo" className="w-20 h-auto" />
          <Navbar />
          <button className="bg-black rounded-full w-28 h-10 px-4 text-white flex items-center justify-center">
            <h1>Order Now</h1>
          </button>
        </div>
        {showText && (
          <div className="absolute left-10 text-8xl translate-y-20 font-bold z-20 text-center">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#222222] via-[#848484] to-white translate-x-3">
              FIND YOUR QUALITY
            </p>
            <div className="translate-x-4 w-fit">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#222222] via-[#848484] to-zinc-400">
                WATER BOTTLE
              </p>
            </div>
            <div className="w-fit text-white text-4xl font-normal translate-y-10 translate-x-6">
              <p className="w-auto">Made exclusive for our champs that are</p>
              <p>constantly out in the sun working hard</p>
              <div className="translate-y-full">
                <button className="bg-black text-white px-8 py-6 rounded-full border-8 text-4xl border-[#363634]">
                  ORDER NOW
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-auto h-auto flex flex-col items-center cursor-pointer overflow-hidden">
          <div className="absolute h-[110vh] top-0 w-4 bg-white z-10 right-64 shadow-[0px_0px_20px_rgba(255,255,255,0.8)]" />
          <img
            src={bottle}
            className={`absolute h-[800px] ${bottlePosition} z-20 transition-transform duration-600 ease-out`}
            onClick={handleBottleClick}
          />
        </div>
        <div className="absolute -translate-x-5 inset-0 flex items-center top-96 justify-center">
          <ConcentricCircles circles={circles} />
        </div>
      </div>
      <div className="relative z-10">
        <SecondPage />
      </div>
      <Third_page />
      <Footer />
    </div>
  );
};

export default HeroPage;
