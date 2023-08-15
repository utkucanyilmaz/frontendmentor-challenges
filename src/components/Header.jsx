import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header({ windowSize }) {
  const navItems = ["home", "destination", "crew", "technology"];
  const [menu, setMenu] = useState(false);

  return (
    <header className="flex items-center px-6 md:px-8 xl:pr-0 justify-between h-[88px] md:h-24 xl:h-48 relative xl:mr-16">
      <div className="h-12 w-12">
        <img
          className="h-full w-full"
          src="assets/shared/logo.svg"
          alt="Logo"
        />
      </div>

      <div className="hidden xl:block w-[38%] h-[1px] bg-opacity-50 bg-white mr-auto ml-16 z-10 opacity-25"></div>

      {windowSize.innerWidth >= 768 && (
        <nav className="font-barlow-condensed flex gap-x-9 xl:gap-x-12 text-white">
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item === "home" ? "/" : item}
              className="flex gap-x-3 uppercase py-9 tracking-nav text-sm xl:text-base hover:border-b-[3px] hover:border-white hover:border-opacity-50 transition-colors"
            >
              <span className="font-bold md:hidden xl:block">0{idx}</span>
              {item}
            </NavLink>
          ))}
        </nav>
      )}

      {window.innerWidth < 768 && (
        <>
          <button className="z-30" onClick={() => setMenu(prev => !prev)}>
            <img
              src={
                menu
                  ? "/assets/shared/icon-close.svg"
                  : "/assets/shared/icon-hamburger.svg"
              }
              alt="Navigation Menu Icon"
            />
          </button>
        </>
      )}

      {window.innerWidth < 768 && (
        <nav
          className={`absolute font-barlow-condensed flex flex-col text-white gap-y-5 text-base max-w-[254px] bg-white backdrop-blur-lg bg-opacity-5 top-0 right-0 z-20 pt-[118px] transition-transform h-screen ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item === "home" ? "/" : item}
              className="flex gap-x-3 uppercase py-[6px] pl-8 pr-[150px] tracking-nav text-sm xl:text-base hover:border-white transition-colors"
            >
              <span className="font-bold md:hidden xl:block">0{idx}</span>
              {item}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
