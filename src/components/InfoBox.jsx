import React from "react";

function InfoBox({ title, body }) {
  return (
    <div className="flex flex-col gap-y-3 border-r-gray-300 pr-12">
      <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
        {title}
      </div>
      <div className="max-w-[12ch] text-2xl font-semibold text-very-dark-gray">
        {body}
      </div>
    </div>
  );
}

export default InfoBox;
