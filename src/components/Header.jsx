import desktopBg from "../assets/images/bg-header-desktop.svg";

export default function Header() {
  return (
    <header className="bg-desaturated-dark-cyan">
      <img className="w-full" src={desktopBg} alt="" />
    </header>
  );
}
