import { useState } from "react";
import lightArrow from "images/icon-arrow-light.svg";

export default function NavItem({ children, hasMenu }) {
  const [arrow, setArrow] = useState(false);

  function handleDropdown() {
    setArrow(current => !current);
    console.log(arrow);
  }
  return (
    <div className="relative" onClick={handleDropdown}>
      <a
        href="#"
        className="flex items-center text-center gap-x-2 hover:underline font-semibold"
      >
        {children}
        <img
          className={`h-2 w-auto transition-transform ${
            arrow ? "rotate-180" : ""
          }`}
          src={lightArrow}
          alt=""
        />
      </a>
      {hasMenu && (
        <div
          className={
            arrow
              ? "absolute bg-white px-6 py-8 text-very-dark-blue gap-y-3 flex flex-col text-sm font-ubuntu rounded shadow-lg top-10 left-1/2 -translate-x-1/2 min-w-[160px] animate-menu-open-animation"
              : "hidden"
          }
        >
          <a
            className="block hover:text-very-dark-black-blue hover:font-medium"
            href="#"
          >
            Contact
          </a>
          <a
            className="block hover:text-very-dark-black-blue hover:font-medium"
            href="#"
          >
            Newsletter
          </a>
          <a
            className="block hover:text-very-dark-black-blue hover:font-medium"
            href="#"
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}
