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
import {
  activityFilter,
  generateApiUrl,
  getValuesFromUrlLocation,
  stringToArrayOfObjects,
} from "../utils/utility";
let valueData = "";
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  const { propertyFilterList } = useSelector((state) => state.homeData);
  let urlSearchValues = getValuesFromUrlLocation(location);

  const [searchValue, setSearchValue] = useState([]);
  const [activeFilterApplied, setActiveFilterApplied] =
    useState(activityFilter);
  const [currentFilterItem, setCurrentFilterItem] = useState([]);
  const [finalResultFilter, setFinalResultFilter] = useState([]);
  const [selectedCheckBox, setSelectedCheckBox] = useState([]);
  const [selectedCheckBox1, setSelectedCheckBox1] = useState([]);

  useEffect(() => {
    dispatch(propertyFilter());
  }, []);

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
      let val = stringToArrayOfObjects(urlSearchValues?.item);
      dispatch(selectedSearchValue(val));
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

  const viewFilterResult = () => {
    setFinalResultFilter(currentFilterItem);
    // navigate(generateApiUrl(activeFilterApplied, "find-property"));
    dispatch(handleFilterModal());
    dispatch(searchAgentProperty(activeFilterApplied));
  };

  const clearAppliedFilter = () => {
    setCurrentFilterItem([]);
    setFinalResultFilter([]);
  };
  const removedCurrentFilter = (val) => {
    let deleteFiltered = finalResultFilter.filter(
      (item) => item.itemValue.value !== val.itemValue.value
    );
    setFinalResultFilter(deleteFiltered);
    if (val.currentFilterSelect == "region") {
      let deleteCheckBox = selectedCheckBox.filter(
        (del) => del !== val.indexValue
      );
      setSelectedCheckBox(deleteCheckBox);
    } else if (val.currentFilterSelect == "country") {
      let deleteCheckBox = selectedCheckBox1.filter(
        (del) => del !== val.indexValue
      );
      setSelectedCheckBox1(deleteCheckBox);
    }
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
          propertyFilterList,
          viewFilterResult,
          activeFilterApplied,
          setActiveFilterApplied,
          setCurrentFilterItem,
          currentFilterItem,
          clearAppliedFilter,
          finalResultFilter,
          setSelectedCheckBox,
          selectedCheckBox,
          removedCurrentFilter,
          setSelectedCheckBox1,
          selectedCheckBox1,
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
