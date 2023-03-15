import { useFilter } from "../context/FilterContext";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic",
];

function DropdownMenu() {
  const { regionVal, setRegionVal, setPage } = useFilter();

  const options = regions.map((region, index) => (
    <option value={region} key={index}>
      {region}
    </option>
  ));

  const handleChange = ({ target }) => {
    setRegionVal(target.value);
    setPage(1);
  };

  return (
    <select
      className="ml-4 h-14 w-[calc(50%-2rem)] cursor-pointer rounded bg-white px-6 text-sm text-neutral-dark-blue-800 shadow-md transition-colors dark:bg-neutral-dark-blue-500 dark:text-white md:w-[200px]"
      name="region"
      onChange={handleChange}
      value={regionVal}
    >
      {options}
    </select>
  );
}

export default DropdownMenu;
