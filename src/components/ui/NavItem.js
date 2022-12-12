import { useState } from "react";
import lightArrow from "images/icon-arrow-light.svg";

export default function NavItem({ children }) {
  const [arrow, setArrow] = useState(false);

  function handleDropdown() {
    setArrow(current => !current);
    console.log(arrow);
  }
  return (
    <div onClick={handleDropdown}>
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
    </div>
  );
}
