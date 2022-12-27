export default function Button({ children }) {
  return (
    <button className="text-neutral-desaturated-blue hover:text-white text-xl">
      {children}
    </button>
  );
}
