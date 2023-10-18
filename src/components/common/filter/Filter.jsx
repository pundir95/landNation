import React, { useState } from "react";
import closeIcon from "../../../assets/images/cancel.svg";
import { homePageData } from "../../../context/HomeProvider";
import { Container } from "react-bootstrap";
import FilterCard from "./FilterCard";
import { useSelector } from "react-redux";

const Filter = () => {
  const {
    openCloseModal,
    propertyFilterList,
    viewFilterResult,
    setActiveFilterApplied,
    activeFilterApplied,
    currentFilterItem,
    setCurrentFilterItem,
    clearAppliedFilter,
    finalResultFilter,
    selectedCheckBox,
    setSelectedCheckBox,
    removedCurrentFilter,
    selectedCheckBox1,
    setSelectedCheckBox1
  } = homePageData();
  const { searchValue } = useSelector((state) => state.homeData);

  const handleFilterChange = (
    e,
    indexValue,
    itemValue,
    currentFilterSelect
  ) => {
    if (currentFilterSelect == "region") {
      console.log(e.target.value);
      console.log(indexValue);
      setActiveFilterApplied({
        ...activeFilterApplied,
        region: indexValue,
      });
      let data={
        itemValue,
        indexValue,
        currentFilterSelect
      }
      setCurrentFilterItem([...currentFilterItem,data])
      if (selectedCheckBox.includes(indexValue)) {
        setSelectedCheckBox(selectedCheckBox.filter((item) => item !== indexValue));
      } else {
        setSelectedCheckBox([...selectedCheckBox, indexValue]);
      }
    } else if (currentFilterSelect == "country") {
      setActiveFilterApplied({
        ...activeFilterApplied,
        country: [1,3,4].join(','),
      });
      let data={
        itemValue,
        indexValue,
        currentFilterSelect
      }
      setCurrentFilterItem([...currentFilterItem,data])
      if (selectedCheckBox1.includes(indexValue)) {
        setSelectedCheckBox1(selectedCheckBox1.filter((item) => item !== indexValue));
      } else {
        setSelectedCheckBox1([...selectedCheckBox1, indexValue]);
      }
    } else if (currentFilterSelect == "price") {
      setActiveFilterApplied({
        ...activeFilterApplied,
        price: indexValue,
      });
      setCurrentFilterItem([...currentFilterItem,itemValue])
    }
    else if (currentFilterSelect == "acres") {
      setActiveFilterApplied({
        ...activeFilterApplied,
        acres: indexValue,
      });
      setCurrentFilterItem([...currentFilterItem,itemValue])
    }
    else if (currentFilterSelect == "property") {
      setActiveFilterApplied({
        ...activeFilterApplied,
        property: indexValue,
      });
      setCurrentFilterItem([...currentFilterItem,itemValue])
    }
  };
console.log(finalResultFilter,"finalResultFilter")
  return (
    <>
      <section className="filter-sidebar">
        <div className="filter-header d-flex justify-content-between align-items-center mb-3">
          <h3 className="filter-head font-20 fw-semibold mb-0">Filter</h3>
          <button className="close-btn" onClick={openCloseModal}>
            <img src={closeIcon} />
          </button>
        </div>
        <Container fluid>
          <div className="feature-card rounded-12 p-1 mb-3">
            <div className="filter-subhead mb-4">Active Filters</div>
            <div className="mb-4">
              {finalResultFilter.map((item) => {
                return (
                  <>
                    <span className="active-filter">
                      {item.itemValue.value}
                      <button className="close-filter" onClick={()=>removedCurrentFilter(item)}>
                        <img src={closeIcon} />
                      </button>
                    </span>
                  </>
                );
              })}
            </div>
          </div>

          <div className="feature-card rounded-12 p-1 mb-3">
            <div className="filter-subhead mb-4">Region</div>
            <div className="filter-container px-3">
              {propertyFilterList?.region?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={selectedCheckBox.includes(index+1)}
                        value={item.value}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(
                            e,
                            index + 1,
                            item,
                            "region"
                          )
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">{item.value}</p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="feature-card rounded-12 p-1 mb-3">
            <FilterCard
              filterList={propertyFilterList?.country}
              filterTitle="Country"
              handleFilterChange={handleFilterChange}
              selectedCheckBox1={selectedCheckBox1}
            />
            {/* <button className="form-common-btn common-outlined-btn">
        See More
      </button> */}
          </div>
          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Price</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.price?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        // checked={selectedCheckBox.includes(index+1)}
                        value={item.value}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(e, index + 1, item, "price")
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        ${item.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}

              <p className="text-body fw-semibold mb-2 pt-3">Custom Price</p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Max"
                />
                <button className="form-common-btn">Price</button>
              </div>
            </div>
          </div>

          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Parcel Size</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.acres?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={item.acre_range}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(e, index + 1,item.acre_range, "acres")
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        ${item.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}

              <p className="text-body fw-semibold mb-2 pt-3">
                Custom Size (Acres)
              </p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Min" 
                />
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Max"
                />
                <button className="form-common-btn">Add</button>
              </div>
            </div>
          </div>

          <div className="feature-card rounded-12 p-1 mb-3">
            <div className="filter-subhead mb-4">Property Types</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.property_type?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={item.value}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(e, index + 1,item.value, "property")
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        {item?.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item?.count}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Bedrooms</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.bedrooms?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={item.value}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(e, index + 1,item?.value, "bedrooms")
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        ${item.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}

              <p className="text-body fw-semibold mb-2 pt-3">Custom Beds</p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Max"
                />
                <button className="form-common-btn">Price</button>
              </div>
            </div>
          </div>

          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">BathRoom</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.bedrooms?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        ${item.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}

              <p className="text-body fw-semibold mb-2 pt-3">Custom Beds</p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Max"
                />
                <button className="form-common-btn">Price</button>
              </div>
            </div>
          </div>

          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Square Feet</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.square_feet?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value={item.value}
                        id="flexCheckDefault"
                        onChange={(e) =>
                          handleFilterChange(e, index + 1,item.value, "property")
                        }
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        ${item.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item.count}</p>
                    </div>
                  </>
                );
              })}

              <p className="text-body fw-semibold mb-2 pt-3">Custom Beds</p>
              <div className="d-flex gap-10">
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Min"
                />
                <input
                  type="text"
                  className="form-control common-outlined-field shadow-none"
                  placeholder="Max"
                />
                <button className="form-common-btn">Price</button>
              </div>
            </div>
          </div>

          <div className="feature-card rounded-12 p-1 mb-3">
            <div className="filter-subhead mb-4">Availability</div>
            <div className="filter-container px-3 pb-3">
              {propertyFilterList?.availability?.map((item, index) => {
                return (
                  <>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault" />
                      <p className="text-body fw-normal mb-0">
                        {item?.value}
                      </p>
                      <p className="text-body fw-normal mb-0">{item?.count}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Container>
        <div className="d-flex justify-content-between">
          <div>
            <button className="form-control common-outlined-field shadow-none">
              Save Search
            </button>
          </div>
          <div className="d-flex">
            <button className="form-control common-outlined-field shadow-none" onClick={clearAppliedFilter}>
              Clear
            </button>
            <button className="form-common-btn" onClick={viewFilterResult}>
              View Result
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
