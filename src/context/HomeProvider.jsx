import React, { createContext, useContext, useState } from "react";

const HomePageContext = createContext();

export const homePageData = () => {
  return useContext(HomePageContext);
};

const HomeProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <HomePageContext.Provider
        value={{
          handleSearchValue,
          searchValue,
        }}
      >
        {children}
      </HomePageContext.Provider>
    </>
  );
};

export default HomeProvider;
