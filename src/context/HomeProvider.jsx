import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectPropertyListData } from "../store/selectors/homeDataSelector";
import { useSelector } from "react-redux";
let valueData=""
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState([]);
  const navigate=useNavigate()
   const propertyList=   useSelector(selectPropertyListData)

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  console.log(propertyList)

  const handleSelectedPropertyCard=(id)=>{
    navigate(`single-property-details/${id}`)
  }
  return (
    <>
      <HomePageContext.Provider
        value={{
          handleSearchValue,
          searchValue,
          valueData,
          handleSelectedPropertyCard
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
