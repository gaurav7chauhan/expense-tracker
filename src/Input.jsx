import React from "react";

const Input = ({
  type = "text",
  className = "",
  background = "bg-white",
  color = "text-black",
  ...props
}) => {
  return (
    <input
      type={type}
      className={`${background} ${color} ${className} border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600`}
      {...props}
    />
  );
};

export default Input;
