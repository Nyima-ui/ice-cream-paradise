import React from "react";

const Button = ({ children, className = "", href = ""}) => {
  return (
    <button
      className={`px-5 max-sm:px-3.5 py-3 bg-primary
         text-neutral-100 font-bold rounded-sm font-nunito cursor-pointer 
        transition-all duration-200 ease-in hover:shadow-button ${className}`}
    >
      <a href={href}>{children}</a>
    </button>
  );
};

export default Button;
