import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from "./CategoryList";
import { homePageData } from "../../../context/HomeProvider";

const BrowseByType = () => {
  const { searchValue } = homePageData();
  return (
    <>
      {searchValue.length == 0 ? (
        <section className="browser-section">
          <Container>
            <div className="inner-browser">
              <h2 className="section-head">Browse by type</h2>
              <CategoryList />
            </div>
          </Container>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default BrowseByType;
