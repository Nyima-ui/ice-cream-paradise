import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-5 py-2.5 bg-primary text-neutral-100 font-bold rounded-sm font-nunito cursor-pointer transition-shadow duration-150 ease-in hover:shadow-button">
      {children}
    </button>
  );
};

export default Button;
