export default function Button({ children, className = "" }) {
  return (
    <button
      className={`font-semibold py-3 rounded-full leading-4 text-center h-12 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
