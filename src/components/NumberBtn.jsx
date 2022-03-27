import React from "react";

const NumberBtn = ({
  label,
  active,
  setTipPercent,
  setCustomInput,
  tipPercent,
}) => {
  return (
    <button
      onClick={() => {
        setCustomInput("");
        setTipPercent(label);
      }}
      className={` ${
        tipPercent === label
          ? "bg-primary text-primaryDark"
          : "bg-primaryDark  text-white "
      } hover:bg-primary hover:text-primaryDark rounded-md py-2 px-8 w-full font-bold text-xl`}
    >
      {label}%
    </button>
  );
};

export default NumberBtn;
