import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="relative flex h-14 w-[480px] items-center text-white">
      <label className="absolute left-6" htmlFor="search-bar">
        <FaSearch />
      </label>
      <input
        id="search-bar"
        type="text"
        placeholder="Search for a country..."
        className="h-full w-full rounded bg-neutral-dark-blue-500 py-4 pl-16 text-sm caret-white placeholder:text-white focus:placeholder:text-transparent"
      />

      <button className="absolute right-3 p-1">
        <FaTimes />
      </button>
    </div>
  );
}

export default SearchBar;
