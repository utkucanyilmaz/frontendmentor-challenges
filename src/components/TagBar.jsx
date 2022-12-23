import Tag from "./Tag";

export default function TagBar({ activeTags, setActiveTags }) {
  function clearTags() {
    setActiveTags([]);
  }
  return (
    <div className="w-full shadow-lg absolute bottom-0 translate-y-1/2 bg-white px-10 py-5 flex items-center justify-between rounded-md">
      <div className="flex flex-wrap gap-4">
        {activeTags.map((tag, key) => (
          <Tag isRemovable={true} key={key}>
            {tag}
          </Tag>
        ))}
      </div>
      <button
        onClick={clearTags}
        className="p-4 text-desaturated-dark-cyan font-league-spartan hover:underline"
      >
        Clear
      </button>
    </div>
  );
}
