import React from "react";

function InfoBox({ title, body }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1 border-r-gray-300 sm:items-start sm:justify-start sm:gap-y-3 sm:pl-4 sm:last:pr-12 md:pl-8">
      <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
        {title}
      </div>
      <div className="text-lg font-semibold text-very-dark-gray sm:max-w-[12ch] md:text-xl xl:text-2xl">
        {body}
      </div>
    </div>
  );
}

export default InfoBox;
