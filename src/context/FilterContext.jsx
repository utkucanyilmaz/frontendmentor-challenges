import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [countries, setCountries] = useState(null);
  const [regionVal, setRegionVal] = useState("All");

  const values = {
    countries,
    setCountries,
    regionVal,
    setRegionVal,
  };

  useEffect(() => {
    (async () => {
      let countriesByRegion;
      if (regionVal === "All") countriesByRegion = await getAllCountries();
      else countriesByRegion = await getCountriesByRegion();
      setCountries(countriesByRegion);
    })();
  }, [regionVal]);

  const getAllCountries = async () => {
    try {
      const { data } = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const getCountriesByRegion = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/region/${regionVal.toLowerCase()}?fields=name,flags,population,region,capital`
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
