import { useState, useEffect } from "react";
import data from "../data.json";

function Destination() {
  const [destination, setDestination] = useState(null);
  const [active, setActive] = useState(0);

  function handleDestinationClick(idx) {
    setDestination(data.destinations[idx]);
    setActive(() => idx);
  }

  useEffect(() => {
    setDestination(data.destinations[0]);
  }, []);

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
                  <button
                    key={idx}
                    onClick={() => handleDestinationClick(idx)}
                    className={`text-base font-barlow-condensed tracking-nav uppercase py-3 hover:border-b-[3px] hover:border-white hover:border-opacity-50 transition-colors ${
                      active === idx
                        ? "text-white border-b-[3px]"
                        : "text-tealish-blue border-b-[3px] border-transparent"
                    }`}
                  >
                    {destination.name}
                  </button>
                ))}
              </nav>

              <div className="pb-14 border-b border-white border-opacity-25">
                <h1 className="uppercase text-100 leading-[1.15] mb-4">
                  {destination.name}
                </h1>
                <p className="text-tealish-blue max-w-[44ch] leading-8">
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
