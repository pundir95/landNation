import React, {useEffect, useState} from "react";
import Search from "../../common/search/Search";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "../../../context/HomeProvider";
import Header from '../../common/header/Header';

const HeroSection = () => {
  const { searchValue } = homePageData();
  const [scrolled, setScrolled] = useState(false)
  console.log(searchValue, "searchValue");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if(scrolled === false){
          setScrolled(true)
        }
      }else{
        setScrolled(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Header scrolled={scrolled}/>
      <section className={searchValue.length == 0 ? "hero-section" : "pt-90 search-results"}>
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
    </>
  );
};

export default HeroSection;
