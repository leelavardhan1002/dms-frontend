import React from "react";

const CustomButton = ({ text,type, onClick, icon, className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`custom-button ${className}`}>
      {icon && <span className={`button-icon mr-2`}>{icon}</span>}
      {text && <span className="button-text">{text}</span>}
    </button>
  );
};

export default CustomButton;
