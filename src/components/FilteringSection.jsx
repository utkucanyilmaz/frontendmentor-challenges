import React from "react";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";

function FilteringSection() {
  return (
    <section className="flex items-center justify-between">
      <SearchBar />
      <DropdownMenu />
    </section>
  );
}

export default FilteringSection;
