import React from "react";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <header className="bg-white shadow-md transition-colors dark:bg-neutral-dark-blue-500 ">
      <div className="container mx-auto flex items-center justify-between py-7 px-4 md:px-0">
        <h1 className="text-lg font-bold text-neutral-dark-blue-800 transition-colors dark:text-white sm:text-xl ">
          Where in the world?
        </h1>
        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
