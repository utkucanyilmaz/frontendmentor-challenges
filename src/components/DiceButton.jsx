import React from "react";

function DiceButton({ getAdvice }) {
  return (
    <button
      onClick={getAdvice}
      className="rounded-full flex items-center justify-center p-6 bg-neon-green hover:shadow-neon-green hover:shadow-[0_0_36px_0] transition-shadow absolute bottom-0 translate-y-1/2"
    >
      <img src="/images/icon-dice.svg" alt="Random advice button logo" />
    </button>
  );
}

export default DiceButton;
