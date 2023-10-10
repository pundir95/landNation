import React from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import "../../assets/style.css";
import Agent from "../../components/findAgent/Agent";
import { homePageData } from "../../context/HomeProvider";
import closeIcon from '../../assets/images/cancel.svg';
import filterIcon from '../../assets/images/filter.svg';

const FindAgent = () => {
  const { searchValue } = homePageData();
  return (
    <>
      {searchValue.length > 0 ? (
        <>
          {" "}
          <section className="filter-section pt-2">
            <Container>
              <div className="d-flex align-items-center mb-21">
                <div>
                  <button className="filter-btn">
                    <img src={filterIcon} />
                    Filter
                  </button>
                </div>
              </div>
              <div>
                <div className="filter-header d-flex justify-content-between align-items-center mb-3">
                  <h3 className="filter-head font-20 fw-semibold mb-0">Filter</h3>
                  <button className="close-btn"><img src={closeIcon} /></button>
                </div>
                <div className="feature-card rounded-12 p-1 mb-3">
                  <div className="filter-subhead mb-4">
                    Active Filters
                  </div>
                  <div className="mb-4">
                    <span className="active-filter">Arkansas <button className="close-filter"><img src={closeIcon} /></button></span>
                  </div>
                </div>
                <div className="feature-card rounded-12 p-1">
                  <div className="filter-subhead mb-4">
                    Region
                  </div>
                  <div className="filter-container px-3">
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <p className="text-body fw-normal mb-0">Southern Region</p>
                      <p className="text-body fw-normal mb-0">8,431</p>
                    </div>
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                      <p className="text-body fw-normal mb-0">Western Region</p>
                      <p className="text-body fw-normal mb-0">5,455</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <p className="text-body">
                  Arkansas Land for Sale - 14,342 Listings
                </p>
                <Form.Select className="sort-select shadow-none">
                  <option>Sort</option>
                  <option value="default">Default</option>
                  <option value="acres_small_large">
                    Acres: Small to Large
                  </option>
                  <option value="acres_large_small">
                    Acres: Large to Small
                  </option>
                  <option value="newest">Newest</option>
                  <option value="price_low_high">Price: Low to High</option>
                  <option value="price_high_low">Price: High to Low</option>
                  <option value="price_per_acres_low_high">
                    Price per Acres: Low to High
                  </option>
                  <option value="price_per_acres_high_low">
                    Price per Acres: High to Low
                  </option>
                </Form.Select>
              </div>
              <div className="">

              </div>
              <Agent />
            </Container>
          </section>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default FindAgent;
