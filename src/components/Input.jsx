import React from "react";

const Input = ({
  children,
  label,
  value,
  setValue,
  error,
  person,
  setError,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* icon container */}
      <div className="flex items-end justify-between mb-2">
        <label htmlFor={label} className="label">
          {label}
        </label>
        {error && <span className="text-danger">{error}</span>}
      </div>
      <div className="relative ">
        <div className="absolute transform -translate-y-1/2 top-1/2 left-4">
          {children}
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            e.target.value === ""
              ? setValue(e.target.value)
              : person
              ? setValue(parseInt(e.target.value))
              : setValue(parseFloat(e.target.value));
          }}
          onFocus={() => setError("")}
          id={label}
          placeholder="0"
          min="0"
          className={`w-full py-2 pl-8 pr-3 text-2.5xl font-bold text-right border-2  rounded-lg outline-none font-primary  bg-fade ${
            error ? "border-danger" : " text-primaryDark border-transparent"
          }`}
        />
      </div>
      <button type="submit" className="hidden"></button>
    </form>
  );
};

export default Input;
