import React, { useState, useEffect } from "react";

const ScrollTriggerExample = () => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTriggered(true);
      } else {
        setIsTriggered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-screen h-auto">
      <header style={{ backgroundColor: isTriggered ? "red" : "transparent" }}>
        
      </header>
    </div>
  );
};

export default ScrollTriggerExample;
