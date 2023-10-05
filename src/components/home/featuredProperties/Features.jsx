import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureList from "./FeatureList";
import { homePageData } from "../../../context/HomeProvider";

const Features = () => {
  const { searchValue } = homePageData();
  return (
    <section className="feature-section">
      <Container>
        <div className="inner-feature">
          {searchValue.length == 0 ? (
            <h2 className="section-head mb-4">Featured Properties</h2>
          ) : (
            ""
          )}
          <FeatureList />
        </div>
      </Container>
    </section>
  );
};

export default Features;
