import React from "react";
import { homePageData } from "../../../context/HomeProvider";
import { Form } from "react-bootstrap";
import { PROPERTY_SORT_FEATURE } from "../../../constant/home";

const SortFilter = () => {
    const {handlePropertyOptions}=homePageData()


  return (
    <Form.Select className="sort-select shadow-none" onChange={handlePropertyOptions}>
      <option selected disabled>Sort</option>
      {/* <option value="default">Default</option>
      <option value="acres_small_large">Acres: Small to Large</option>
      <option value="acres_large_small">Acres: Large to Small</option>
      <option value="newest">Newest</option>
      <option value="price_low_high">Price: Low to High</option>
      <option value="price_high_low">Price: High to Low</option>
      <option value="price_per_acres_low_high">
        Price per Acres: Low to High
      </option>
      <option value="price_per_acres_high_low">
        Price per Acres: High to Low
      </option> */}
      {
        PROPERTY_SORT_FEATURE?.map((item,index)=>{
            return (
                <>
                <option value={item.value}>{item.label}</option>
                </>
            )
        })
      }
    </Form.Select>
  );
};

export default SortFilter;
