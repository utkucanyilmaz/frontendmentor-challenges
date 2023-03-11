import React from "react";
import InfoBox from "./InfoBox";

function Info({ info }) {
  return (
    <div className="absolute bottom-0 z-10 grid translate-y-1/2 grid-cols-4 gap-x-8 divide-x rounded-2xl bg-white py-9 shadow">
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
