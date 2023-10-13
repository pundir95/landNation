import React, { useEffect, useState } from "react";
import Search from "../../common/search/Search";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";
import CustomButton from "../../common/filterButton/CustomButton";
import filterIcon from "../../../assets/images/filter.svg";

const HeroSection = () => {
  const { searchValue, openCloseModal } = homePageData();
  console.log(window.location.pathname);
  return (
    <>
      <section
        className={
          searchValue.length == 0 ? "hero-section" : "pt-90 search-results"
        }
      >
        <Container>
          <div className="inner-hero">
            {searchValue.length == 0 && ( 
              <h1 className="hero-title text-center">
                Search and find your dream
              </h1>
            )}
            <div className="d-flex gap-10 align-items-center">
              <Search />
              {searchValue.length > 0 ? (
                <CustomButton customClass="filter-btn" onClick={openCloseModal}>
                  <img src={filterIcon} />
                  Filter
                </CustomButton>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
