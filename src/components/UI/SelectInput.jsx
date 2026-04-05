import React from "react";

const SelectInput = ({
  label,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  error,
  className = "",        // wrapper er jonno
  selectClassName = "",  // select er jonno (NEW)
  disabled = false,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      
      {label && (
        <label className="inline-block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand transition
        ${error ? "border-red-500" : "border-gray-300"}
        ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        ${selectClassName}`}
        {...props}
      >
        <option disabled hidden>
          {placeholder}
        </option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SelectInput;
