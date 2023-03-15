import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useFilter } from "../context/FilterContext";

function BackButton() {
  const { setFiltered, countries } = useFilter();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
    setFiltered(countries);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm text-neutral-dark-blue-800 drop-shadow-lg transition-colors hover:opacity-80 dark:bg-neutral-dark-blue-500 dark:text-white sm:px-10"
    >
      <FaArrowLeft />
      Back
    </button>
  );
}

export default BackButton;
