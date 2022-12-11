import logo from "../images/logo.svg";
import lightArrow from "../images/icon-arrow-light.svg";

export default function Header() {
  return (
    <header className="container mx-auto h-32 flex flex-row items-center justify-between">
      <div className="flex items-center justify-between gap-x-16">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <nav>
          <ul className="flex items-center justify-center gap-x-8 text-white">
            <li className="group">
              <a
                href="#"
                className="flex items-center text-center gap-x-2 group-hover:underline font-semibold"
              >
                Product
                <img
                  className="h-2 w-auto transition-transform transform group-hover:rotate-180"
                  src={lightArrow}
                  alt=""
                />
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex  items-center text-center gap-x-2 group-hover:underline font-semibold"
              >
                Company
                <img
                  className="h-2 w-auto transition-transform transform group-hover:rotate-180"
                  src={lightArrow}
                  alt=""
                />
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center text-center gap-x-2 group-hover:underline font-semibold"
              >
                Contact
                <img
                  className="h-2 w-auto transition-transform transform group-hover:rotate-180"
                  src={lightArrow}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-x-8 items-center ">
        <a href="#" className="text-white hover:underline px-3 py-2">
          Login
        </a>
        <button className="bg-white text-light-red font-semibold px-10 py-3 rounded-full leading-4 text-center h-12 hover:bg-very-light-red hover:text-white transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
