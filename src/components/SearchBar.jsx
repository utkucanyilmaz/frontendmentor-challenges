import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="relative mx-auto flex h-14 w-[calc(100%-2rem)] items-center text-white md:mx-0 md:w-[480px]">
      <label className="absolute left-4 md:left-6" htmlFor="search-bar">
        <FaSearch />
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search for a country..."
        className="h-full w-full rounded bg-neutral-dark-blue-500 py-4 pl-12 text-sm caret-white placeholder:text-white focus:placeholder:text-transparent md:pl-16"
      />

      <button className="absolute right-3 p-1">
        <FaTimes />
      </button>
    </div>
  );
}

export default SearchBar;
