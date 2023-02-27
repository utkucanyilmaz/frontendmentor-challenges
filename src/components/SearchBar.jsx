import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useFilter } from "../context/FilterContext";

function SearchBar() {
  const { setFiltered, countries } = useFilter();

  const handleChange = ({ target }) => {
    setFiltered(() =>
      countries.filter(country =>
        country.name.common
          .toString()
          .toLowerCase()
          .includes(target.value.toString().toLowerCase())
      )
    );
  };

  return (
    <div className="relative mx-auto flex h-14 w-[calc(100%-2rem)] items-center text-neutral-dark-blue-800 shadow-md dark:text-white md:mx-0 md:w-[480px] ">
      <label className="absolute left-4 md:left-6" htmlFor="search-bar">
        <FaSearch />
      </label>

      <input
        id="search-bar"
        type="text"
        onChange={handleChange}
        placeholder="Search for a country..."
        className="h-full w-full rounded bg-white py-4 pl-12 text-sm caret-neutral-dark-blue-800 placeholder:text-neutral-gray-500 focus:placeholder:text-transparent dark:bg-neutral-dark-blue-500 dark:caret-white dark:placeholder:text-white md:pl-16 "
      />

      <button className="absolute right-3 p-1">
        <FaTimes />
      </button>
    </div>
  );
}

export default SearchBar;
