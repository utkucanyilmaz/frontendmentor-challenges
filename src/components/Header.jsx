import React from "react";

function Header() {
  const navItems = ["home", "destination", "crew", "technology"];

  return (
    <header className="flex items-center justify-between h-48 relative mr-16">
      <div className="h-12 w-12">
        <img
          className="h-full w-full"
          src="assets/shared/logo.svg"
          alt="Logo"
        />
      </div>

      <div className="w-[38%] h-[1px] bg-opacity-50 bg-white mr-auto ml-16 z-10 opacity-25"></div>

      <nav className="font-barlow-condensed flex gap-x-12 text-white">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="flex gap-x-3 uppercase py-8 border-b-[3px] hover:border-hover tracking-nav text-base"
          >
            <span className="font-bold">0{idx}</span>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
