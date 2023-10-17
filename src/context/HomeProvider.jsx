import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { selectPropertyListData } from "../store/selectors/homeDataSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  _likeDislikeProperties,
  getBrowseByCategory,
  getFeatureProperty,
  getPropertyListSortFilter,
  getSinglePropertyDetails,
  handleFilterModal,
  propertyFilter,
  searchAgentProperty,
  searchByStateCityOrCountry,
  selectedSearchValue,
} from "../store/slices/homeDataSlice";
import { activityFilter, getValuesFromUrlLocation, stringToArrayOfObjects } from "../utils/utility";
let valueData = "";
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const {propertyFilterList}=useSelector(state=>state.homeData)
  let urlSearchValues = getValuesFromUrlLocation(location);

  const [searchValue, setSearchValue] = useState([]);
  const [activeFilterApplied, setActiveFilterApplied] =
    useState(activityFilter);

    useEffect(()=>{
    dispatch(propertyFilter())
    },[])

  useEffect(() => {
    if (activeFilterApplied.search) {
      dispatch(searchAgentProperty(activeFilterApplied));
    }
  }, [activeFilterApplied]);

  useEffect(() => {
    if (urlSearchValues?.id) {
      dispatch(getBrowseByCategory(urlSearchValues?.id, () => {}));
    }
    if (urlSearchValues?.item) {
      let val=stringToArrayOfObjects(urlSearchValues?.item)
      dispatch(selectedSearchValue(val))
      setActiveFilterApplied({
        ...activeFilterApplied,
        search: urlSearchValues?.item,
      });
    }
  }, []);

  const handleSearchValue = (value) => {
    setSearchValue(value);
    let convertArrayToString = value?.map((it) => it.value);
    if (value?.length > 0) {
      setActiveFilterApplied({
        ...activeFilterApplied,
        search: convertArrayToString.join(","),
      });
      navigate(`/find-property/?search=${convertArrayToString.join(",")}`);
    } else {
      dispatch(getFeatureProperty());
    }
  };

  const handleSelectedPropertyCard = (id) => {
      navigate(`/single-property-details/${id}`);
  };
  const openCloseModal = () => {
    dispatch(handleFilterModal());
  };

  const handlePropertyOptions = (e) => {
    dispatch(getPropertyListSortFilter(e.target.value));
  };

  const likeDislikeProperties = (id, featured) => {
    let data = {
      id,
      featured: featured ? false : true,
    };
    dispatch(_likeDislikeProperties(data));
  };

  const browseByCategory = (id, cardTitle) => {
    dispatch(
      getBrowseByCategory(id, () => {
        navigate(`/find-property/?search=${cardTitle}+${id}`);
      })
    );
  };

  return (
    <>
      <HomePageContext.Provider
        value={{
          handleSearchValue,
          searchValue,
          valueData,
          handleSelectedPropertyCard,
          openCloseModal,
          handlePropertyOptions,
          likeDislikeProperties,
          browseByCategory,
          propertyFilterList
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
