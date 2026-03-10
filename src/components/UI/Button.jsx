import React from "react";

const Button = ({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  ...props
}) => {

  const baseStyle =
    "px-6 py-3 rounded-lg cursor-pointer font-medium transition duration-200";

  const variants = {
    primary: "bg-brand text-white ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;