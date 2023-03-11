import { useRef } from "react";
import btnArrow from "/images/icon-arrow.svg";

function SearchBar({ setClientIp }) {
  const ip = useRef();

  const changeIp = () => {
    if (ip.current.value && ip.current.value.trim() !== "") {
      setClientIp(ip.current.value);
    } else return;
  };

  return (
    <div className="flex h-14 w-[555px] overflow-hidden rounded-2xl">
      <input
        ref={ip}
        placeholder="Search for any IP address or domain"
        type="text"
        className="h-full w-full px-6 text-lg placeholder:text-dark-gray"
      />

      <button
        onClick={changeIp}
        className="flex h-14 w-14 items-center justify-center bg-black hover:bg-very-dark-gray"
      >
        <img src={btnArrow} alt="Submit button" />
      </button>
    </div>
  );
}

export default SearchBar;
