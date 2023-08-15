import { useState, useEffect } from "react";
import data from "../data.json";
import AnimatePages from "../components/AnimatePages";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

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
    <AnimatePages>
      <main className="text-white items-center md:items-start xl:ml-16 xl:mt-20 flex flex-col gap-y-8 md:gap-y-16">
        {destination && (
          <>
            <div className="md:ml-8 md:mt-10 xl:mt-0 uppercase font-barlow-condensed flex gap-x-5 xl:gap-x-7 tracking-nav md:tracking-header text-base md:text-xl xl:text-28">
              <span className="opacity-25">01</span> Pick your destination
            </div>

            <section className="flex w-full flex-col items-center xl:items-end xl:flex-row xl:justify-around">
              <AnimatePresence mode="wait">
                <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  key={destination.name}
                  className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-auto xl:h-auto mb-4 md:mb-10 xl:mb-0"
                >
                  <img src={destination.images.png} alt={destination.name} />
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col gap-y-5 md:gap-y-8 xl:gap-y-9 items-center xl:items-start text-center xl:text-start">
                <nav className="flex gap-x-7 md:gap-x-9">
                  {data.destinations.map((destination, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDestinationClick(idx)}
                      className={`text-sm md:text-base font-barlow-condensed tracking-nav uppercase py-2 md:py-3 hover:border-b-[3px] hover:border-white hover:border-opacity-50 transition-colors ${
                        active === idx
                          ? "text-white border-b-[3px]"
                          : "text-tealish-blue border-b-[3px] border-transparent"
                      }`}
                    >
                      {destination.name}
                    </button>
                  ))}
                </nav>

                <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  key={destination.name}
                  className="pb-12 xl:pb-14 border-b border-white border-opacity-25"
                >
                  <h1 className="uppercase text-[56px] md:text-[80px] xl:text-100 leading-[1.15] mb-4">
                    {destination.name}
                  </h1>
                  <p className="text-tealish-blue text-[15px] leading-[25px] max-w-[327px] md:text-base md:max-w-[573px] xl:max-w-[44ch] md:leading-7 xl:leading-8">
                    {destination.description}
                  </p>
                </motion.div>

                <motion.div
                  variants={animations}
                  initial="initial"
                  animate="animate"
                  key={destination.distance}
                  className="flex flex-col md:flex-row gap-y-8 gap-x-20 mt-3"
                >
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
                </motion.div>
              </div>
            </section>
          </>
        )}
      </main>
    </AnimatePages>
  );
}

export default Destination;
