import React from "react";
import Circle from "../components/Circle";
import Hand_1 from "../assets/Hand_1.svg";
import arrow from "../assets/Arrow.svg";
import arrow_2 from "../assets/Arrow_2.svg";

const Second_page = () => {
  return (
    <>
      <div className="absolute z-10 space-y-5 left-16 top-11">
        <p className="text-black font-bold text-4xl">Finest</p>
        <p className="text-black font-bold text-4xl">Design For</p>
        <p className="text-black font-bold text-4xl">young</p>
        <p className="text-black font-bold text-4xl">Generations</p>
        <div className="space-y-3 text-3xl">
          <p className="text-black">Finest material, eco</p>
          <p className="text-black">friendly -higher</p>
          <p className="text-black">durability</p>
        </div>
      </div>
      <div className="bg-[#928f94] relative w-screen h-screen flex flex-row items-center justify-center overflow-hidden">
        <img
          src={arrow_2}
          alt="arrow 2"
          className="absolute h-[375px] translate-x-52 -translate-y-10 z-30  left-10 top-5"
        />
        <div className="absolute translate-x-[1000px] translate-y-96 z-30  left-10 top-5">
          <div className="absolute font-font-geo translate-x-48 ">
            <p className="text-black font-bold text-6xl">5-20%</p>
            <p className="text-black font-bold text-6xl">OFF today</p>
          </div>
          <img src={arrow} alt="arrow" className=" h-[300px]" />
        </div>
        <img
          src={Hand_1}
          alt="hand"
          className="z-20 h-[750px] w-fit -translate-x-48 translate-y-20 "
        />
        <Circle size={625} color={"#e5e7e7"} />
      </div>
    </>
  );
};

export default Second_page;
