import React from "react";
import { Container, Row, Col, Form, Pagination } from "react-bootstrap";
import "../../assets/style.css";
import Agent from "../../components/findAgent/Agent";
import { homePageData } from "../../context/HomeProvider";
import SortFilter from "../../components/common/sortFilter/SortFilter";

const FindAgent = () => {
  const { searchValue,propertyFilterList } = homePageData();
  return (
    <>
      {searchValue.length > 0 ? (
        <>
          {" "}
          <section className="filter-section pt-2">
            <Container>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <p className="text-body">
                  {/* {`Arkansas Land for Sale - ${propertyFilterList.length} Listings`} */}
                </p>
                <SortFilter />
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
