import { RxCross2 } from "react-icons/rx";

export default function Tag({
  children,
  activeTags,
  setActiveTags,
  isRemovable = false,
  test,
}) {
  function addActiveTags() {
    if (!activeTags.includes(children)) {
      setActiveTags([...activeTags, children]);
    }
  }

  function removeTag() {
    setActiveTags(prev => prev.filter((_, index) => index !== test));
  }

  return (
    <div name={children} className="flex">
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
        <button
          onClick={removeTag}
          className="flex items-center justify-center bg-desaturated-dark-cyan hover:bg-very-dark-grayish-cyan rounded-tr rounded-br h-8 w-8 cursor-pointer"
        >
          <RxCross2 color="#fff" size={20} />
        </button>
      )}
    </div>
  );
}
