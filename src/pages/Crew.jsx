import { useState, useEffect } from "react";
import data from "../data.json";
import AnimatePages from "../components/AnimatePages";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
};

function Crew() {
  const [crewMember, setCrewMember] = useState(null);
  const [active, setActive] = useState(0);
  const crewButtons = new Array(data.crew.length).fill(null);

  function handleCrewClick(idx) {
    setCrewMember(data.crew[idx]);
    setActive(() => idx);
  }

  useEffect(() => {
    setCrewMember(data.crew[0]);
  }, []);

  return (
    <AnimatePages>
      <main className="text-white items-center mx-6 md:mx-0 xl:ml-16 xl:mt-20 flex flex-col gap-y-16 -mb-10">
        {crewMember && (
          <>
            <div className="md:ml-8 md:mt-10 md:self-start xl:mt-0 uppercase font-barlow-condensed flex gap-x-5 xl:gap-x-7 tracking-nav md:tracking-header text-base md:text-xl xl:text-28">
              <span className="opacity-25">02</span> Meet Your Crew
            </div>

            <motion.div
              variants={animations}
              initial="initial"
              animate="animate"
              key={crewMember.name}
              className="xl:grid xl:grid-cols-2 flex flex-col-reverse md:flex-col items-center justify-center text-center xl:text-start"
            >
              <div className="flex flex-col gap-y-8 md:gap-y-10 xl:gap-y-32 mb-10 mt-8">
                <div>
                  <h2 className="text-white text-opacity-50 uppercase text-base leading-[18px] md:text-2xl xl:text-[32px] md:leading-9 mb-2 md:mb-4">
                    {crewMember.role}
                  </h2>
                  <h1 className="uppercase text-2xl md:text-[40px] md:leading-[46px] xl:text-[56px] xl:leading-[64px] mb-4 xl:mb-7 xl:min-w-[45ch]">
                    {crewMember.name}
                  </h1>
                  <p className="text-tealish-blue text-[15px] leading-[25px] md:text-base xl:text-lg max-w-[458px] xl:max-w-[44ch] md:leading-8">
                    {crewMember.bio}
                  </p>
                </div>

                <div className="flex order-first md:order-none gap-x-4 xl:gap-x-6 items-center justify-center xl:items-start xl:justify-start">
                  {crewButtons.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCrewClick(idx)}
                      className={`h-[10px] w-[10px] xl:w-4 xl:h-4 rounded-full bg-white hover:bg-opacity-50 cursor-pointer transition-colors ${
                        active === idx ? "bg-opacity-100" : "bg-opacity-20"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="w-full flex justify-center border-b md:border-b-0 border-white border-opacity-25">
                <div className="xl:absolute xl:bottom-0 w-[177px] md:w-[456px] ">
                  <img src={crewMember.images.png} alt={crewMember.name} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </main>
    </AnimatePages>
  );
}

export default Crew;
