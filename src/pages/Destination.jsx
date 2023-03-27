import { useState, useEffect } from "react";
import data from "../data.json";

function Destination() {
  const [destination, setDestination] = useState("");
  useEffect(() => {
    setDestination(data.destinations[0]);
  }, []);

  useEffect(() => {
    console.log(destination);
  }, [destination]);

  console.log(data);
  return (
    <main className="text-white ml-16 mt-20 flex flex-col gap-y-16">
      {destination && (
        <>
          <div className="uppercase font-barlow-condensed flex gap-x-7 tracking-header text-28">
            <span className="opacity-25">01</span> Pick your destination
          </div>

          <section className="flex justify-around items-end">
            <div>
              <img src={destination.images.png} alt={destination.name} />
            </div>

            <div className="flex flex-col gap-y-9">
              <nav className="flex gap-x-9">
                {data.destinations.map((destination, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-base font-barlow-condensed tracking-nav uppercase text-tealish-blue py-3 border-b-[3px] hover:border-hover"
                  >
                    {destination.name}
                  </a>
                ))}
              </nav>

              <div className="pb-14 border-b border-white border-opacity-25">
                <h1 className="uppercase text-100 text-white leading-[1.15] mb-4">
                  {destination.name}
                </h1>
                <p className="text-tealish-blue max-w-[45ch] leading-8">
                  {destination.description}
                </p>
              </div>

              <div className="flex gap-x-20">
                <div className="uppercase">
                  <div className="font-barlow-condensed text-tealish-blue text-sm tracking-[2.36px] mb-4">
                    Avg. Distance
                  </div>
                  <div className="font-bellefair text-28">
                    {destination.distance}
                  </div>
                </div>

                <div className="uppercase">
                  <div className="font-barlow-condensed text-tealish-blue text-sm tracking-[2.36px] mb-4">
                    Est. Travel Time
                  </div>
                  <div className="font-bellefair text-28">
                    {destination.travel}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default Destination;
