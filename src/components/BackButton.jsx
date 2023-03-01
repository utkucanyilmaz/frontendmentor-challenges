import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm text-neutral-dark-blue-800 drop-shadow-lg hover:opacity-80 dark:bg-neutral-dark-blue-500 dark:text-white sm:px-10"
    >
      <FaArrowLeft />
      Back
    </button>
  );
}

export default BackButton;
