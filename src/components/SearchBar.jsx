import { useRef } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useFilter } from "../context/FilterContext";

function SearchBar() {
  const searchBar = useRef();

  const { setFiltered, countries } = useFilter();

  const debounceTimeout = useRef(null);

  const handleChange = ({ target }) => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setFiltered(() =>
        countries.filter(country =>
          country.name.common
            .toString()
            .toLowerCase()
            .trim()
            .includes(target.value.toString().toLowerCase().trim())
        )
      );
    }, 700);
  };

  const clearSearch = () => {
    searchBar.current.value = "";
    setFiltered(countries);
  };

  return (
    <div className="relative mx-auto flex h-14 w-[calc(100%-2rem)] items-center text-neutral-dark-blue-800 shadow-md transition-colors dark:text-white md:mx-0 md:w-[480px]">
      <label className="absolute left-4 md:left-6" htmlFor="search-bar">
        <FaSearch />
      </label>

      <input
        ref={searchBar}
        id="search-bar"
        type="text"
        autoComplete="off"
        onChange={handleChange}
        placeholder="Search for a country..."
        className="h-full w-full rounded bg-white py-4 pl-12 text-sm caret-neutral-dark-blue-800 transition-colors placeholder:text-neutral-gray-500 placeholder:transition-colors focus:placeholder:text-transparent dark:bg-neutral-dark-blue-500 dark:caret-white dark:placeholder:text-white md:pl-16"
      />

      <button onClick={clearSearch} className="absolute right-3 p-1">
        <FaTimes className="transition-transform hover:scale-[.8]" />
      </button>
    </div>
  );
}

export default SearchBar;
