import React from "react";

const FilterButton = ({openCloseModal}) => {
  return (
    <button className="close-btn" onClick={openCloseModal}>
      <img src={closeIcon} />
    </button>
  );
};

export default FilterButton;
