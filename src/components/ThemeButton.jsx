import React from "react";
import { FaMoon } from "react-icons/fa";

function ThemeButton() {
  return (
    <button className="group flex items-center gap-x-3 p-1">
      <FaMoon className="text-white transition-colors group-hover:text-gray-400" />
      <div className="text-white transition-colors group-hover:text-gray-400">
        Dark Mode
      </div>
    </button>
  );
}

export default ThemeButton;
