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
    "px-6 py-3 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-brand text-white hover:opacity-90",
  };

  const selectedVariant = variants[variant] ?? variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${selectedVariant} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center">
        {children}
      </span>
    </button>
  );
};

export default Button;