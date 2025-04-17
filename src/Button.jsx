import React from "react";

const variantStyles = {
  primary: "bg-blue-700 text-white cursor-pointer hover:bg-blue-500",
  secondary: "bg-gray-500 text-white cursor-pointer hover:bg-gray-600",
  danger: "bg-red-500 text-white cursor-pointer hover:scale-110",
  outline: "bg-white border border-gray-300 text-black cursor-pointer hover:bg-gray-100",
};

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses = "px-5 py-3 rounded-md transition duration-200 ease-in-out";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  const variantClass = variantStyles[variant] || variantStyles.primary;

  return (
    <button
      className={`${baseClasses} ${variantClass} ${disabledClasses} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
