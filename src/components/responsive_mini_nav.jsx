import React, { useState } from "react";

const ResponsiveMiniNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  justify-between w-96 items-center h-screen ">
      {" "}
      {/* Container */}
      <div className="relative">
        {/* Toggle button for small screens */}
        <button
          className=" md:hidden  text-black font-[popppins] text-xl p-2 rounded"
          onClick={toggleMenu}
        >
          Menu
        </button>

        {/* Menu items */}
        <ul
          className={`absolute bg-white shadow-md rounded-md mt-2 w-96 text-black font-[poppins] z-20 md:flex md:items-center md:static md:w-auto md:bg-transparent md:shadow-none md:p-0   text-xl ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="cursor-pointer hover:underline md:ml-4">Home</li>
          <li className="cursor-pointer hover:underline md:ml-4">
            Our Product
          </li>
          <li className="cursor-pointer hover:underline md:ml-4">About Us</li>
          <li className="cursor-pointer hover:underline md:ml-4">Sales</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMiniNav;
