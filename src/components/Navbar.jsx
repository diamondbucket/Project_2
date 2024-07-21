import React from "react";
import logo from "../assets/logo_2.svg";
import PreOrder_button from "./PreorderButton";
import Mini_navbar from "./Mini_navbar";

export const Navbar = () => {
  const logostyle = {
    width: "100px",
    height: "80px",
  };
  return (
    <div className="bg-white h-20 w-screen border-b border-gray-400 flex flex-row justify-between">
      <div className="px-5">
        <img src={logo} alt="logo" style={logostyle} />
      </div>
      <Mini_navbar />
      <PreOrder_button />
    </div>
  );
};
