import { useEffect } from "react";

export default function Tag({
  children,
  filtered,
  setFiltered,
  activeTags,
  setActiveTags,
}) {
  return (
    <a
      onClick={() => {
        if (!activeTags.includes(children)) {
          setActiveTags([...activeTags, children]);
        }
      }}
      href="#"
      className="p-2 bg-light-grayish-cyan-filter text-desaturated-dark-cyan rounded hover:bg-desaturated-dark-cyan hover:text-white cursor-pointer"
    >
      {children}
    </a>
  );
}
