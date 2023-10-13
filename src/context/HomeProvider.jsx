import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectPropertyListData } from "../store/selectors/homeDataSelector";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureProperty, getSinglePropertyDetails, handleFilterModal, searchAgentProperty, searchByStateCityOrCountry } from "../store/slices/homeDataSlice";
import { activityFilter } from "../utils/utility";
let valueData=""
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const [searchValue, setSearchValue] = useState([]);
  const [activeFilterApplied,setActiveFilterApplied]=useState(activityFilter)
  

  useEffect(()=>{
    if(activeFilterApplied.search){
      dispatch(searchAgentProperty(activeFilterApplied))

    }
  },[activeFilterApplied])

  const handleSearchValue = (value) => {
    setSearchValue(value);
    if(value?.length>0){
      let convertArrayToString = value?.map((it) => it.value);
      console.log(convertArrayToString.join(","),)
      setActiveFilterApplied({
        ...activeFilterApplied,
        search:convertArrayToString.join(",")
      })
    }else{
      dispatch(getFeatureProperty())
    }

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
