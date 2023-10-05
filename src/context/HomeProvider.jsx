import React, { createContext, useContext, useState } from "react";
let valueData=""
const HomePageContext = createContext(valueData);

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState([]);
  const handleSearchValue = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <HomePageContext.Provider
        value={{
          handleSearchValue,
          searchValue,
          valueData
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
