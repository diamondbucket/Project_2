import React from "react";

const Circle = ({ size, color }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        position: "absolute",
      }}
    ></div>
  );
};

const ConcentricCircles = () => {
  const circles = [
    { size: 650, color: "#cfcfcf" },
    { size: 500, color: "#afafad" },
    { size: 350, color: "#787876" },
    { size: 50, color: "black" },
  ];

  return (
    <div className="relative flex items-center justify-center h-screen text-[#6d6868]">
      {circles.map((circle, index) => (
        <Circle key={index} size={circle.size} color={circle.color} />
      ))}
    </div>
  );
};

export default ConcentricCircles;
