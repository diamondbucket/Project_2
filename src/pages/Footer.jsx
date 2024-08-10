import React from "react";
import insta from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/site_X.svg";
import mail from "../assets/email1.svg";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute w-screen h-[50vh] overflow-hidden bg-custom-grey-2 text-white p-8 flex flex-col justify-end">
      <div className="container flex justify-between items-start -translate-y-36">
        <div className="flex items-center">
          <div className="lg:text-5xl text-xl text-black font-bold">deep</div>
        </div>
        <div className="flex lg:space-x-8 lg:text-2xl   font-semibold text-black space-x-5 ">
          <a
            href="#Main"
            onClick={(e) => handleScroll(e, "#Main")}
            className="hover:underline"
          >
            Home
          </a>
          <a
            href="#Features"
            onClick={(e) => handleScroll(e, "#Features")}
            className="hover:underline"
          >
            Features
          </a>
          <a
            href="#Faq"
            onClick={(e) => handleScroll(e, "#Faq")}
            className="hover:underline"
          >
            Faqs
          </a>
        </div>
      </div>

      <div className="border-t border-black mt-4 -translate-y-20"></div>

      <div className="container  mx-fill mt-4 flex justify-center ">
        <div className="flex space-x-16 lg:text-xl justify-between text-sm">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <img src={insta} className="lg:h-10 h-7" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <img src={X} className="lg:h-10 h-7" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-400"
          >
            <img src={linkedin} className="lg:h-10 h-7" />
          </a>
          <a
            href="mailto:trinity.getsolutions@gmail.com"
            className=" hover:text-gray-400   "
          >
            <img src={mail} className=" lg:h-12 h-7 -translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;