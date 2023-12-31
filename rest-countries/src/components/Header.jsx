import React from "react";
import ThemeButton from "./ThemeButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md transition-colors dark:bg-neutral-dark-blue-500">
      <div className="container mx-auto flex items-center justify-between py-7 px-4 md:px-0">
        <Link to={"/"}>
          <h1 className="text-md font-bold text-neutral-dark-blue-800 transition-colors dark:text-white sm:text-xl ">
            Where in the world?
          </h1>
        </Link>
        <div>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
