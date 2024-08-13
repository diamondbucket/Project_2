import React, { useState, useEffect } from "react";

// inside component:

const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
  const position = window.pageYOffset;
  setScrollPosition(position);
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
