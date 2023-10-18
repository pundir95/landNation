import React, { useEffect } from "react";
// import "../../assets/style.css";
import BrowseByType from "../../components/home/browseByType/BrowseByType";
import Features from "../../components/home/featuredProperties/Features";
import ListWithUs from "../../components/home/listWithUs/ListWithUs";
import HeroSection from "../../components/home/heroSection/HeroSection";
import FindAgent from "../findAgent/findAgent";
import HomeProvider from "../../context/HomeProvider";
import PaginationComponent from "../../components/common/pagination/PaginationComponent";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/common/filter/Filter";
import {
  getFeatureProperty,
  selectedSearchValue,
} from "../../store/slices/homeDataSlice";
import Loader from "../../components/common/commonLoader/Loader";
const Home = () => {
  const { openFilterModal, loading } = useSelector((state) => state.homeData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeatureProperty());
    dispatch(selectedSearchValue([]));
  }, []);

  return (
    <>
      <HomeProvider>
        {openFilterModal ? <Filter /> : ""}

        <>
          {loading ? <Loader /> : ""}
          <HeroSection />
          {/* <FindAgent /> */}
          <BrowseByType />
          <Features />
          <PaginationComponent />
          <ListWithUs />
        </>
      </HomeProvider>
    </>
  );
};

export default Home;
