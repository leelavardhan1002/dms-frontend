import React from "react";

const CustomButton = ({
  text,
  onClick,
  btnColor,
  btnHeight,
  btnWidth,
  textColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${btnColor} ${btnHeight} ${btnWidth} ${textColor}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
