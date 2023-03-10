import React from "react";

function Info() {
  return (
    <div className="absolute bottom-0 grid translate-y-1/2 grid-cols-4 gap-x-8 rounded-2xl bg-white px-8 py-9 shadow">
      <div className="flex flex-col gap-y-3 border-r border-r-gray-300 pr-12">
        <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
          IP Address
        </div>
        <div className="text-2xl font-semibold text-very-dark-gray">
          192.212.174.101
        </div>
      </div>

      <div className="flex flex-col gap-y-3 border-r border-r-gray-300 pr-12">
        <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
          Location
        </div>
        <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
          Brooklyn, NY 10001
        </div>
      </div>

      <div className="flex flex-col gap-y-3 border-r border-r-gray-300 pr-12">
        <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
          Timezone
        </div>
        <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
          UTC -05:00
        </div>
      </div>

      <div className="flex flex-col gap-y-3 border-r-gray-300 pr-12">
        <div className="text-xs font-bold uppercase tracking-widest text-dark-gray">
          ISP
        </div>
        <div className="max-w-[10ch] text-2xl font-semibold text-very-dark-gray">
          SpaceX Starlink
        </div>
      </div>
    </div>
  );
}

export default Info;
