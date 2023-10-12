import React from "react";
import CustomButton from "../../../components/common/filterButton/CustomButton";
import filterIcon from "../../../assets/images/filter.svg";
import { homePageData } from "../../../context/HomeProvider";
import Search from "../../common/search/Search";

const SearchWithFilter = () => {
    const { openCloseModal } = homePageData();
  return (
    <div className="search-results">
      <Search />
      <CustomButton customClass="filter-btn" onClick={openCloseModal}>
        <img src={filterIcon} />
        Filter
      </CustomButton>
    </div>
  );
};

export default SearchWithFilter;
