import logo from "images/logo.svg";
import NavItem from "./ui/NavItem";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="container mx-auto h-32 flex flex-row items-center justify-between">
      <div className="flex items-center justify-between gap-x-16">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <nav className="flex items-center justify-center gap-x-8 text-white">
          <NavItem>Projects</NavItem>
          <NavItem>Company</NavItem>
          <NavItem hasMenu={true}>Connect</NavItem>
        </nav>
      </div>
      <div className="flex gap-x-8 items-center ">
        <a href="#" className="text-white hover:underline px-3 py-2">
          Login
        </a>
        <Button className="px-10 bg-white hover:bg-very-light-red hover:text-white text-light-red">
          Sign Up
        </Button>
      </div>
    </header>
  );
}
