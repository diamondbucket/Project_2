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
        transition: "all 0.5s ease", // Smooth transition for size changes
      }}
    />
  );
};

export default Circle;
