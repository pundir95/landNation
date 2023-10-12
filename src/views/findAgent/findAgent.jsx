import React from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import "../../assets/style.css";
import Agent from "../../components/findAgent/Agent";
import { homePageData } from "../../context/HomeProvider";

const FindAgent = () => {
  const { searchValue} = homePageData();
  return (
    <>
      {searchValue.length > 0 ? (
        <>
          {" "}
          <section className="filter-section pt-2">
            <Container>
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
              <div className=""></div>
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
