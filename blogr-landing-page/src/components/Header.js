import logo from "images/logo.svg";
import NavItem from "./ui/NavItem";
import Button from "./ui/Button";
import { useWindowWidth } from "@react-hook/window-size";
import HamburgerIcon from "images/icon-hamburger.svg";
import CloseIcon from "images/icon-close.svg";
import { useState } from "react";

export default function Header() {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(false);

  const changeIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:h-32 h-40 flex flex-row items-center justify-between py-4 px-6 md:px-0">
      <div className="flex items-center justify-between gap-x-16">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        {windowWidth > 768 && (
          <nav className="flex items-center justify-center gap-x-8 text-white">
            <NavItem>Projects</NavItem>
            <NavItem>Company</NavItem>
            <NavItem hasMenu={true}>Connect</NavItem>
          </nav>
        )}
      </div>

      {windowWidth > 768 && (
        <div className="flex gap-x-8 items-center ">
          <a href="#" className="text-white hover:underline px-3 py-2">
            Login
          </a>
          <Button className="px-10 bg-white hover:bg-very-light-red hover:text-white text-light-red">
            Sign Up
          </Button>
        </div>
      )}

      {windowWidth <= 768 && (
        <button onClick={changeIcon}>
          <img src={isOpen ? CloseIcon : HamburgerIcon} alt="" />
        </button>
      )}

      {windowWidth <= 768 && isOpen && (
        <nav className="absolute top-32 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] flex flex-col items-center justify-center gap-y-6 text-very-dark-blue bg-white shadow-lg py-10 rounded-md z-10">
          <NavItem>Projects</NavItem>
          <NavItem>Company</NavItem>
          <NavItem hasMenu={true}>Connect</NavItem>
          <div className="flex w-full px-6 flex-col gap-y-3 items-center ">
            <div className="h-[1px] w-full bg-grayish-blue mt-2 mb-2 opacity-70"></div>
            <a
              href="#"
              className="font-overpass font-semibold text-very-dark-blue hover:underline px-3 py-2"
            >
              Login
            </a>
            <Button
              className="px-10 bg-gradient-to-r from-gr-very-light-red to-gr-light-red 
            text-white hover:opacity-70"
            >
              Sign Up
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
