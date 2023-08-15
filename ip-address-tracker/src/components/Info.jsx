import React from "react";
import InfoBox from "./InfoBox";

function Info({ info }) {
  return (
    <div className="absolute bottom-0 z-10 grid min-w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] translate-y-2/3 grid-cols-1 gap-y-7 divide-x rounded-2xl bg-white py-7 text-center shadow sm:min-w-0 sm:translate-y-1/2 sm:grid-cols-4 sm:gap-y-0 sm:gap-x-8 sm:py-9 sm:text-left">
      <InfoBox title={"IP Address"} body={info && info?.ip} />
      <InfoBox
        title={"Location"}
        body={
          info &&
          `${info.location.region}, ${info.location.country} ${info.location.postalCode}`
        }
      />
      <InfoBox
        title={"Timezone"}
        body={info && `UTC ${info.location.timezone}`}
      />
      <InfoBox title={"ISP"} body={info && info.isp} />
    </div>
  );
}

export default Info;
