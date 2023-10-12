import React from "react";

const CustomButton = ({ customClass ,children,onClick }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
