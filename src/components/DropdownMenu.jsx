import { useFilter } from "../context/FilterContext";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

function DropdownMenu() {
  const { setRegionVal } = useFilter();

  const options = regions.map((region, index) => (
    <option value={region} key={index}>
      {region}
    </option>
  ));

  const handleChange = ({ target }) => {
    setRegionVal(target.value);
  };

  return (
    <select
      className="ml-4 h-14 w-[calc(50%-2rem)] cursor-pointer rounded bg-white px-6 text-sm text-neutral-dark-blue-800 shadow-md dark:bg-neutral-dark-blue-500 dark:text-white md:w-[200px]"
      name="region"
      onChange={handleChange}
    >
      {options}
    </select>
  );
}

export default DropdownMenu;
