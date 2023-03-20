import React from "react";
import DiceButton from "./DiceButton";

function AdviceCard({ data, getAdvice }) {
  return (
    <div className="p-12 flex flex-col items-center justify-center bg-dark-grayish-blue font-monrope rounded-2xl gap-y-6 relative mx-4">
      <div className="text-sm uppercase tracking-[.30em] font-medium text-neon-green text-center">
        Advice #{data.slip.id}
      </div>
      <p className="text-light-cyan font-medium text-[28px] max-w-[25ch] text-center leading-[43px]">
        “{data.slip.advice}”
      </p>

      <img
        src="images/pattern-divider-desktop.svg"
        alt="Pattern Divider"
        className="mb-6"
      />

      <DiceButton getAdvice={getAdvice} />
    </div>
  );
}

export default AdviceCard;
