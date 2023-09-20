import React from "react";

export const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "3px solid black",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
};
