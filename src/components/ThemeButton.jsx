import React from "react";
import { FaMoon } from "react-icons/fa";

function ThemeButton({ theme, setTheme }) {
  const handleTheme = () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
    localStorage.setItem("theme", themeValue);
  };

  return (
    <button
      onClick={handleTheme}
      className="group flex items-center gap-x-2 p-1 text-sm sm:gap-x-3 sm:text-base"
    >
      <FaMoon className="text-neutral-dark-blue-800 transition-colors group-hover:text-gray-400 dark:text-white" />
      <div className="text-neutral-dark-blue-800 transition-colors group-hover:text-gray-400 dark:text-white">
        Dark Mode
      </div>
    </button>
  );
}

export default ThemeButton;
