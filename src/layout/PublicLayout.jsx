import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';

const PublicLayout = () => {
  const [scrolled, setScrolled] = useState(false)
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
    <Outlet/>
    <Footer/>
    </>
  )

}

export default PublicLayout