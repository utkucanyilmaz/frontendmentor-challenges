import React from "react";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-dark-blue-500 p-7 px-20">
      <h1 className="text-xl font-semibold text-white">Where in the world?</h1>
      <div>
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
