import React from "react";
import closeIcon from "../../../assets/images/cancel.svg";
import { homePageData } from "../../../context/HomeProvider";
import { Container } from "react-bootstrap";

const Filter = () => {
  const {openCloseModal}=homePageData()
  return (
    <>
      <section className="filter-section pt-2 mt-5 mb-4">
        <Container>
          <div className="filter-header d-flex justify-content-between align-items-center mb-3">
            <h3 className="filter-head font-20 fw-semibold mb-0">Filter</h3>
            <button className="close-btn" onClick={openCloseModal}>
              <img src={closeIcon} />
            </button>
          </div>
          <div className="feature-card rounded-12 p-1 mb-3">
            <div className="filter-subhead mb-4">Active Filters</div>
            <div className="mb-4">
              <span className="active-filter">
                Arkansas{" "}
                <button className="close-filter">
                  <img src={closeIcon} />
                </button>
              </span>
            </div>
          </div>
          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Region</div>
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
          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Region</div>
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
          <div className="feature-card rounded-12 p-1">
            <div className="filter-subhead mb-4">Region</div>
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
        </Container>
      </section>
    </>
  );
};

export default Filter;
