import { GrFormClose } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import removeIcon from "../assets/images/icon-remove.svg";

export default function Tag({
  children,
  activeTags,
  setActiveTags,
  isRemovable = false,
}) {
  function addActiveTags() {
    if (!activeTags.includes(children)) {
      setActiveTags([...activeTags, children]);
    }
  }

  function removeTag() {}

  return (
    <div onClick={removeTag} className="flex">
      <button
        className={`py-1 px-2 font-league-spartan bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded-tl rounded-bl flex items-center ${
          !isRemovable
            ? "hover:bg-desaturated-dark-cyan hover:text-white rounded cursor-pointer"
            : ""
        }`}
        onClick={addActiveTags}
        disabled={isRemovable}
      >
        {children}
      </button>
      {isRemovable && (
        <button className="flex items-center justify-center bg-very-dark-grayish-cyan rounded-tr rounded-br h-8 w-8 cursor-pointer">
          <RxCross2 color="#fff" />
        </button>
      )}
    </div>
  );
}
