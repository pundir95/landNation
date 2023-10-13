import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import searchIcon from "../../../assets/images/search-icon.svg";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { homePageData } from "../../../context/HomeProvider";
import { searchByStateCityOrCountry, selectedSearchValue } from "../../../store/slices/homeDataSlice";
import { useDispatch, useSelector } from "react-redux";

const animatedComponents = makeAnimated();

const Search = () => {
  const dispatch =useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const {handleSearchValue}=homePageData()
  const [timerValue, setTimerValue] = useState("");
  const {stateCityOrCountry,searchValue}=useSelector(state=>state.homeData);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSearch=(value)=>{
    // if (searchValue.some((value) => value.value === value)) {
    //   // Value is a duplicate; do nothing
    //   return;
    // }
    handleSearchValue(value)
    setSelectedOptions(value)
    dispatch(selectedSearchValue(value))
  }
  const inputChange=(e)=>{ 
    clearTimeout(timerValue);
    const timer = setTimeout(() => {
      dispatch(searchByStateCityOrCountry(e))
    },500)
    setTimerValue(timer);
  }
  return (
    <div className="search-card w-100 gap-10">
      <Row className="align-items-center">
        <Col lg={2} md={3}>
          <button className="search-by-map">Search by map</button>
        </Col>
        <Col lg={10} md={9}>
          <div className="">
            <div className="d-flex align-items-center w-100">
              <Select
                closeMenuOnSelect={false}
                components={{animatedComponents,NoOptionsMessage: () => "No Result" }}
                isMulti
                isSearchable
                isLoading={isLoading}
                options={stateCityOrCountry}
                className="search-field w-100"
                placeholder="Enter a State, Country or City"
                styles={{
                  control: (provided, state) => ({
                    ...provided,
                    width: '1000px',  // Set the desired width
                    height: '50px', // Set the desired height
                    borderRadius:'20px',
                  }),
                }}
                onChange={handleSearch}
                // value={selectedOptions}
                onInputChange={inputChange}
              />
         
              <button className="search-btn">
                <img src={searchIcon} />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
