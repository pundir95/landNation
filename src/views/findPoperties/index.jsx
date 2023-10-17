import React from "react";
import { Container } from "react-bootstrap";
import Agent from "../../components/findAgent/Agent";
import SortFilter from "../../components/common/sortFilter/SortFilter";
import Search from "../../components/common/search/Search";
import CustomButton from "../../components/common/filterButton/CustomButton";
import HomeProvider, { homePageData } from "../../context/HomeProvider";
import filterIcon from "../../assets/images/filter.svg"
import FeatureList from "../../components/home/featuredProperties/FeatureList";
import { useSelector } from "react-redux";
import PaginationComponent from "../../components/common/pagination/PaginationComponent";
const FindProperties = () => {
  const { openCloseModal } = homePageData();
  const {propertyList}=   useSelector(state=>state.homeData)
  return (
    <>
      <HomeProvider>
        <section className="filter-section mt-5 pt-90 search-results">
          <Container>
            <div className="d-flex gap-10 align-items-center">
              <Search />
              <CustomButton customClass="filter-btn" onClick={openCloseModal}>
                <img src={filterIcon} />
                Filter
              </CustomButton>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <p className="text-body">
                Arkansas Land for Sale - 14,342 Listings
              </p>
              <SortFilter />
            </div>
            <div className=""></div>
            <Agent />
            <FeatureList list={propertyList}/>
            <PaginationComponent/>
          </Container>
        </section>
      </HomeProvider>
    </>
  );
};

export default FindProperties;
