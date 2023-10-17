import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../assets/style.css";
import Search from "../../components/common/search/Search";
import HomeProvider, { homePageData } from "../../context/HomeProvider";

import Map from "../../components/common/map/Map";
import ContactSeller from "../../components/singleProperty/contactSeller.jsx/ContactSeller";
import PropertySearchCard from "../../components/singleProperty/propertySearchCard/PropertySearchCard";
import Filter from "../../components/common/filter/Filter";
import { useSelector } from "react-redux";
import SearchWithFilter from "../../components/singleProperty/searchWithFilter/SearchWithFilter";

const SingleProperty = () => {
  const { openFilterModal } = useSelector((state) => state.homeData);
  const { singlePropertyDetailsData, loading } = useSelector(
    (state) => state.homeData
  );
  return (
    <>
      <HomeProvider>
        {openFilterModal? <Filter />:"" }
            <section className="picture-section mt-5">
              <Container>
                {/* <SearchWithFilter /> */}
                <PropertySearchCard
                  singlePropertyDetailsData={singlePropertyDetailsData}
                  loading={loading}
                />
                <div>
                  <Map />
                  <ContactSeller />
                </div>
              </Container>
            </section>
      </HomeProvider>
    </>
  );
};

export default SingleProperty;
