import React from "react";
import { Container } from "react-bootstrap";
import Search from "../../common/search/Search";
import { homePageData } from "../../../context/HomeProvider";
import CustomButton from "../../common/filterButton/CustomButton";
import filterIcon from "../../../assets/images/filter.svg";


const HeroSection = () => {
  const { searchValue,openCloseModal } = homePageData();
  return (
    <section
      className={
        searchValue.length == 0 ? "hero-section" : "pt-90 search-results"
      }
    >
      <Container>
        <div className="inner-hero">
          {searchValue.length == 0 && (
            <h1 className="hero-title text-center">
              Real Estate Agent Directory
            </h1>
          )}
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
      </Container>
    </section>
  );
};

export default HeroSection;
