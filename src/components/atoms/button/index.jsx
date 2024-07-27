import React from "react";

const CustomButton = ({ text, onClick, icon, className = "" }) => {
  return (
    <button onClick={onClick} className={`custom-button ${className}`}>
      {icon && <span className={`button-icon mr-2`}>{icon}</span>}
      {text && <span className="button-text">{text}</span>}
    </button>
  );
};

export default CustomButton;
