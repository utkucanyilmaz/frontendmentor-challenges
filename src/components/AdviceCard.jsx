import React from "react";
import DiceButton from "./DiceButton";

function AdviceCard({ data, getAdvice }) {
  return (
    <div className="px-6 py-10 sm:p-12 flex flex-col items-center justify-center bg-dark-grayish-blue font-monrope rounded-xl sm:rounded-2xl gap-y-6 relative mx-4 sm:mx-0">
      <div className="text-xs sm:text-sm uppercase tracking-[.36em] font-semibold text-neon-green text-center">
        Advice #{data.slip.id}
      </div>

      <p className="text-light-cyan font-semibold text-2xl sm:text-[28px] max-w-[20ch] sm:max-w-[25ch] text-center leading-8 sm:leading-[42px]">
        “{data.slip.advice}”
      </p>

      <picture>
        <source
          media="(max-width: 639px)"
          srcSet="images/pattern-divider-mobile.svg"
          alt="Pattern Divider"
        />
        <img
          src="images/pattern-divider-desktop.svg"
          alt="Pattern Divider"
          className="mb-6"
        />
      </picture>

      <DiceButton getAdvice={getAdvice} />
    </div>
  );
}

export default AdviceCard;
