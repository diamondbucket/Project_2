import React from "react";
import logo from "../assets/logo_2.svg";
import PreOrder_button from "./PreorderButton";


export const Navbar = () => {
  const logostyle = {
    width: "100px",
    height: "80px",
  };
  return (
    <div className="bg-white items-center  justify-center h-20 w-1vh border-b  border-gray-900 flex">
      <div className=" absolute md:static  md:-translate-x-[400px] -translate-x-[190px]">
        <img src={logo} alt="logo" style={logostyle} />
      </div>
      <div className="">    
        <div className=" hidden  md:flex text-gray-500 md:flex-row flex-col w-auto items-center justify-center text-2xl font-[Poppins] ">
          <a className="px-5">Sales</a>
          <a className="px-5">Home</a>
          <a className="px-5">Products</a>
          <a className="px-5">About</a>
        </div>
      </div>  
      <div className="md:translate-x-[400px] translate-x-[125px]">
          <PreOrder_button />
      </div>
    </div>
  );
};
