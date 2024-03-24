import React from "react";

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="bg-primary text-white text-sm px-4 rounded-lg min-w-[140px] py-2.5"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
