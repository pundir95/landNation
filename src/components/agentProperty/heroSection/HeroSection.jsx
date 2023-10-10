import React from "react";
import { Container } from "react-bootstrap";
import Search from "../../common/search/Search";
import { homePageData } from "../../../context/HomeProvider";

const HeroSection = () => {
  const { searchValue } = homePageData();
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
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
