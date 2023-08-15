import Tag from "./Tag";
import { motion, AnimatePresence } from "framer-motion";

export default function TagBar({ activeTags, setActiveTags }) {
  function clearTags() {
    setActiveTags([]);
  }
  return (
    <motion.div
      layout
      animate={{ opacity: 1, y: 50 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="w-[calc(100%-2rem)] shadow-lg absolute bottom-0 bg-white px-4 md:px-10 py-5 flex items-center justify-between rounded-md"
    >
      <div className="flex flex-wrap gap-4">
        <AnimatePresence>
          {activeTags.map((tag, key) => (
            <Tag
              setActiveTags={setActiveTags}
              activeTags={activeTags}
              isRemovable={true}
              key={key}
              test={key}
            >
              {tag}
            </Tag>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={clearTags}
        className="p-4 text-dark-grayish-cyan font-semibold hover:text-desaturated-dark-cyan font-league-spartan hover:underline"
      >
        Clear
      </button>
    </motion.div>
  );
}
