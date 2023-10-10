import React, { useEffect } from "react";
import "../../assets/style.css";
import HomeProvider from "../../context/HomeProvider";
import HeroSection from "../../components/agentProperty/heroSection/HeroSection";
import TopAgentList from "../../components/agentProperty/topAgentList/TopAgentList";
import RealEstateAgent from "../../components/agentProperty/realEstateAgent/RealEstateAgent";
import { useDispatch, useSelector } from "react-redux";
import FeatureList from "../../components/home/featuredProperties/FeatureList";
import { Container } from "react-bootstrap";
import { selectedSearchValue } from "../../store/slices/homeDataSlice";
import PaginationComponent from "../../components/common/pagination/PaginationComponent";

const AgentProperty = () => {
  const { searchValue } = useSelector((state) => state.homeData);
  const dispatch =useDispatch()

   useEffect(()=>{
   return ()=>{
    dispatch(selectedSearchValue([]))
   }
   },[])
  return (
    <>
      <HomeProvider>
        <HeroSection />
        {searchValue.length > 0 ? (
          <>
            <RealEstateAgent />
            <section className="feature-section">
            <Container>
              <div className="inner-feature">
                <FeatureList />
                <PaginationComponent/>
              </div>
              </Container>
            </section>
          </>
        ) : (
          <TopAgentList />
        )}
      </HomeProvider>
    </>
  );
};

export default AgentProperty;
