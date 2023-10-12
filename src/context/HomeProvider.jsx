import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectPropertyListData } from "../store/selectors/homeDataSelector";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterModal } from "../store/slices/homeDataSlice";
let valueData=""
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const dispatch=useDispatch()
  const [searchValue, setSearchValue] = useState([]);
    const navigate=useNavigate()

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  const handleSelectedPropertyCard=(id)=>{
    navigate(`single-property-details/${id}`)
  }
  const openCloseModal=()=>{
    dispatch(handleFilterModal())
  }
  return (
    <>
      <HomePageContext.Provider
        value={{
          handleSearchValue,
          searchValue,
          valueData,
          handleSelectedPropertyCard,
          openCloseModal
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
