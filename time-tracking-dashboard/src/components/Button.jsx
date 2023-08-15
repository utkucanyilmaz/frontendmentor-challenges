export default function Button({ children, setTimeFrame, timeframe }) {
  return (
    <button
      onClick={() => {
        setTimeFrame(() => children.toLowerCase());
      }}
      className={`transition-colors text-neutral-desaturated-blue hover:text-white text-lg lg:text-xl ${
        timeframe === children.toLowerCase()
          ? "text-white"
          : "text-neutral-desaturated-blue"
      }`}
    >
      {children}
    </button>
  );
}
