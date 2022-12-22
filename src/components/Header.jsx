import TagBar from "./TagBar";
import desktopBg from "../assets/images/bg-header-desktop.svg";

export default function Header({ activeTags, setActiveTags }) {
  return (
    <header>
      <div className="bg-desaturated-dark-cyan">
        <img className="w-full" src={desktopBg} alt="" />
        <div className="container mx-auto relative">
          <TagBar activeTags={activeTags} setActiveTags={setActiveTags} />
        </div>
      </div>
    </header>
  );
}
