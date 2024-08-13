import React from "react";
import WAVE1 from "../assets/wave1.svg";
import WAVE2 from "../assets/wave2.svg";
import WAVE3 from "../assets/wave3.svg";
import WAVE4 from "../assets/wave4.svg";
import bottle90 from "../assets/bottle_with_top_high_res.png";
import Footer from "./Footer";

const Third_page = () => {
  return (
    <div className="relative flex flex-row bg-radial-gradient-custom h-[100vh] w-screen overflow-hidden">
      <div className="absolute  justify-between flex items-center">
        <p className="text-white w-1/4 p-8">
          WE OFFER METAL FLASKS THAT ARE 70mm IN DIAMETER AND 246mm TALL. THEY
          ARE ENHANCED WITH A RUBBER COVERING ON THE EXTERIOR AND A CIRCULAR
          PATTERN AT THE SERVICE END.
        </p>
        <p className="text-white w-1/4 p-8">
          OUR STOCK INCLUDES STEEL CONTAINERS WITH A 70mm WIDTH AND 246mm
          HEIGHT. THESE ARE UPGRADED WITH A RUBBER COAT OUTSIDE AND A ROUND
          DESIGN AT THE DISPENSING END.
        </p>
      </div>
      <div className="flex items-end">
        <img
          src={WAVE1}
          className="absolute scale-x-150 scale-y-100 translate-y-1/4 z-50 "
        />
        <img
          src={bottle90}
          className="relative scale-y-50 scale-x-50 translate-y-1/4 translate-x-2/4 z-40"
        />
        <img
          src={WAVE2}
          className="absolute scale-x-150 scale-y-100 left-[10%] z-30"
        />
        <img
          src={bottle90}
          className="absolute scale-[40%] translate-y-[25%] rotate-45 translate-x-[100%] z-10"
        />
        <img
          src={WAVE3}
          className="absolute scale-x-150 scale-y-110 -translate-x-[10%] -translate-y-2/4 z-20  "
        />
        <img
          src={bottle90}
          className="absolute scale-[28%] -rotate-19 translate-y-[20%] -translate-x-[20%]"
        />
        <img
          src={WAVE4}
          className="absolute scale-x-150 scale-y-120 -translate-y-[110%] translate-x-[20%]"
        />
      </div>
    </div>
  );
};

export default Third_page;
