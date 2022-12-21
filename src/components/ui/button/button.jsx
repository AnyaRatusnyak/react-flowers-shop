import React from "react";

export const Button = ({ type, className, onClick, text, props }) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};