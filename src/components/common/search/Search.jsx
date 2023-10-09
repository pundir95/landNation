import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import searchIcon from "../../../assets/images/search-icon.svg";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { homePageData } from "../../../context/HomeProvider";

const animatedComponents = makeAnimated();

const Search = () => {
  const {handleSearchValue}=homePageData()
  const selectOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
  ]
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSearch=(value)=>{
    handleSearchValue(value)
    setSelectedOptions(value)
  }
  return (
    <div className="search-card">
      <Row className="align-items-center">
        <Col lg={2} md={3}>
          <button className="search-by-map">Search by map</button>
        </Col>
        <Col lg={10} md={9}>
          <div className="">
            <div className="d-flex align-items-center w-100">
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={selectOptions}
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
                value={selectedOptions}
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
