import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full flex flex-col">
      
      {label ? (
        <label className="mb-1 text-sm font-medium text-gray-600">
          {label}
        </label>
      ) : null}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2.5 border rounded-lg outline-none transition-all
        ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-gray-300 focus:ring-2 focus:ring-blue-200"
        }
        ${className}`}
        {...props}
      />

      {error ? (
        <p className="mt-1 text-xs text-red-500">
          {error}
        </p>
      ) : null}

    </div>
  );
};

export default Input;