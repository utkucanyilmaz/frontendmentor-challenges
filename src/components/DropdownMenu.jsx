import React from "react";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Ocenia"];

function DropdownMenu() {
  const options = regions.map((region, index) => (
    <option value={region} key={index}>
      {region}
    </option>
  ));

  return (
    <select
      className="ml-4 h-14 w-[calc(50%-2rem)] cursor-pointer rounded bg-neutral-dark-blue-500 px-6 text-sm text-white md:w-[200px]"
      name="region"
    >
      {options}
    </select>
  );
}

export default DropdownMenu;
