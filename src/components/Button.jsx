export default function Button({ children, timeframe, setTimeFrame }) {
  return (
    <button
      onClick={() => {
        setTimeFrame(() => children.toLowerCase());
      }}
      className="text-neutral-desaturated-blue hover:text-white text-xl"
    >
      {children}
    </button>
  );
}
