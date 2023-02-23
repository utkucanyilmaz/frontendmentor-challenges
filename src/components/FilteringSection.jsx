import React from "react";
import SearchBar from "./SearchBar";
import DropdownMenu from "./DropdownMenu";

function FilteringSection() {
  return (
    <section className="flex flex-col items-start gap-y-8 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0">
      <SearchBar />
      <DropdownMenu />
    </section>
  );
}

export default FilteringSection;
