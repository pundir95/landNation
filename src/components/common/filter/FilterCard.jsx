import React from "react";

const FilterCard = ({ filterList, filterTitle,handleFilterChange }) => {
  return (
    <>
      <div className="filter-subhead mb-4">{filterTitle}</div>
      <div className="filter-container px-3 pb-3">
        {filterList?.map((item, index) => {
          return (
            <>
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={item?.country}
                  id="flexCheckDefault"
                  onChange={(e)=>handleFilterChange(e,index+1,item.country,"country")}
                />
                <label class="form-check-label" for="flexCheckDefault" />
                <p className="text-body fw-normal mb-0">{item?.country}</p>
                <p className="text-body fw-normal mb-0">{item?.count}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FilterCard;
