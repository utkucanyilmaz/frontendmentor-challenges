import TagBar from "./TagBar";
import desktopBg from "../assets/images/bg-header-desktop.svg";
import mobileBg from "../assets/images/bg-header-mobile.svg";

export default function Header({ activeTags, setActiveTags }) {
  return (
    <header>
      <div className="bg-desaturated-dark-cyan">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileBg} />
          <img
            className="w-full max-h-[156px] md:max-h-auto"
            src={desktopBg}
            alt=""
          />
        </picture>
        {activeTags.length > 0 && (
          <div className="container mx-auto relative px-4">
            <TagBar activeTags={activeTags} setActiveTags={setActiveTags} />
          </div>
        )}
      </div>
      {activeTags.length > 0 && <div className="h-16 md:h-0"></div>}
    </header>
  );
}
