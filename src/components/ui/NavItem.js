import { useState } from "react";
import LightArrow from "images/icon-arrow-light.svg";
import DarkArrow from "images/icon-arrow-dark.svg";
import { useWindowWidth } from "@react-hook/window-size";

export default function NavItem({ children, hasMenu }) {
  const [arrow, setArrow] = useState(false);

  const windowWidth = useWindowWidth();

  function handleDropdown() {
    setArrow(current => !current);
    console.log(arrow);
  }
  return (
    <div className="w-full md:relative flex flex-col md:flex-row px-6 md:px-0">
      <a
        href="#"
        className="flex items-center justify-center text-center gap-x-2 hover:underline font-semibold md:font-ubuntu font-overpass py-1"
        onClick={handleDropdown}
      >
        {children}
        <img
          className={`h-2 w-auto transition-transform ${
            arrow ? "rotate-180" : ""
          }`}
          src={windowWidth > 768 ? LightArrow : DarkArrow}
          alt=""
        />
      </a>
      {hasMenu && (
        <div
          className={
            arrow
              ? "md:absolute bg-gray-100 md:bg-white md:px-6  py-4 md:py-8 text-very-dark-blue gap-y-6 md:gap-y-3 flex flex-col text-sm font-ubuntu rounded-lg md:rounded md:shadow-lg md:top-10 md:left-1/2 md:-translate-x-1/2 text-center md:text-left md:w-[160px] md:animate-menu-open-animation mt-4 md:mt-0"
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
