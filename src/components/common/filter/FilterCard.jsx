import React from "react";

const FilterCard = ({ filterList, filterTitle,handleFilterChange,selectedCheckBox1 }) => {
  return (
    <>
      <div className="filter-subhead mb-4">{filterTitle}</div>
      <div className="filter-container px-3 pb-3">
        {filterList?.map((item, index) => {
          return (
            <>
              <div className="mb-3 d-flex align-items-center justify-content-between">
                <div>
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    checked={selectedCheckBox1.includes(index+1)}
                    value={item?.value}
                    id="flexCheckDefault"
                    onChange={(e)=>handleFilterChange(e,index+1,item,"country")}
                  />
                  <label class="form-check-label text-body fw-normal mb-0" for="flexCheckDefault">{item?.value}</label>
                </div>
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
