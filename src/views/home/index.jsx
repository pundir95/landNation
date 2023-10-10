import React from "react";
import "../../assets/style.css";
import Footer from "../../components/common/footer/Footer";
import BrowseByType from "../../components/home/browseByType/BrowseByType";
import Features from "../../components/home/featuredProperties/Features";
import ListWithUs from "../../components/home/listWithUs/ListWithUs";
import Search from "../../components/common/search/Search";
import HeroSection from "../../components/home/heroSection/HeroSection";
import Agent from "../../components/findAgent/Agent";
import FindAgent from "../findAgent/findAgent";
import HomeProvider from "../../context/HomeProvider";
import PaginationComponent from "../../components/common/pagination/PaginationComponent";
const Home = () => {
  return (
    <>
    <HomeProvider>
    <HeroSection />
      <FindAgent/>
      <BrowseByType />
      <Features />
      <PaginationComponent/>
      <ListWithUs />
    </HomeProvider>

    </>
  );
};

export default Home;
