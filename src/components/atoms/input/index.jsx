import React from "react";

const CustomInput = ({
  text,
  divClassName,
  inputClassName,
  labelClassName
}) => {
  return (
  <div className={`${divClassName}`}>
    <label className={`${labelClassName} `}>{text}</label>
    <input
      className={`${inputClassName}`}
    />
  </div>
  );
};

export default CustomInput;
