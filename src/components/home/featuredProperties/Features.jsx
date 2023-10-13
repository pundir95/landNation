import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureList from "./FeatureList";
import { homePageData } from "../../../context/HomeProvider";
import { useSelector } from "react-redux";

const Features = () => {
  const { searchValue } = homePageData();
  const {propertyList}=   useSelector(state=>state.homeData)
  return (
    <section className="feature-section">
      <Container>
        <div className="inner-feature">
          {searchValue.length == 0 ? (
            <h2 className="section-head mb-4">Featured Properties</h2>
          ) : (
            ""
          )}
          <FeatureList list={propertyList} />
        </div>
      </Container>
    </section>
  );
};

export default Features;
