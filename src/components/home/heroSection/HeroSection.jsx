import React from "react";
import Search from "../../common/search/Search";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";

const HeroSection = () => {
  const { searchValue } = homePageData();
  console.log(searchValue, "searchValue");
  return (
    <section className={searchValue.length == 0 ? "hero-section" : ""}>
      <Container>
        <div className="inner-hero">
          {searchValue.length == 0 && (
            <h1 className="hero-title text-center">
              Search and find your dream
            </h1>
          )}
          <Search />
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
