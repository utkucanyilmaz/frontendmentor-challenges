import { GrFormClose } from "react-icons/gr";

export default function Tag({
  children,
  activeTags,
  setActiveTags,
  isRemovable = false,
}) {
  function collectActives() {
    if (!activeTags.includes(children)) {
      setActiveTags([...activeTags, children]);
    }
  }
  return (
    <button
      className="p-2 font-league-spartan bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer flex items-center"
      onClick={collectActives}
    >
      {children}

      {isRemovable && (
        <div className="">
          <GrFormClose />
        </div>
      )}
    </button>
  );
}
