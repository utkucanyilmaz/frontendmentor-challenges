import { useState, useEffect } from "react";
import data from "../data.json";

function Technology() {
  const [technology, setTechnology] = useState(null);
  const [active, setActive] = useState(0);

  function handleTechClick(idx) {
    setActive(() => idx);
    setTechnology(data.technology[idx]);
  }

  const techButtons = new Array(data.technology.length).fill(null);

  useEffect(() => {
    setTechnology(data.technology[0]);
  }, []);

  return (
    <main className="text-white items-center xl:items-start xl:ml-16 xl:mt-20 flex flex-col min-h-screen">
      {technology && (
        <>
          <div className="ml-8 md:self-start md:mt-10 xl:mt-0 uppercase font-barlow-condensed flex gap-x-5 xl:gap-x-7 tracking-nav md:tracking-header text-base md:text-xl xl:text-28">
            <span className="opacity-25">03</span>Space Launch 101
          </div>

          <div className="mt-7 flex w-full flex-col-reverse xl:flex-row items-center justify-center xl:justify-between">
            <div className="flex gap-x-20 flex-col text-center xl:text-start xl:flex-row">
              <div className="flex flex-row xl:flex-col justify-center gap-4 xl:gap-8 mb-7 md:mb-11 xl:mb-0">
                {techButtons.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTechClick(idx)}
                    className={`w-[40px] h-[40px] md:w-[60px] md:h-[60px] xl:w-20 xl:h-20 flex items-center border border-transparent justify-center text-base md:text-2xl xl:text-3xl font-bellefair rounded-full cursor-pointer transition-colors ${
                      active === idx
                        ? "bg-white text-dark-blue"
                        : "border-white border-opacity-50 hover:border-opacity-100 bg-transparent"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <div>
                <div className="font-barlow-condensed text-tealish-blue text-sm md:text-base tracking-nav mb-2 md:mb-4 xl:mb-3">
                  THE TERMINOLOGY…
                </div>
                <h1 className="text-2xl leading-[28px] md:text-[40px] md:leading-[46px] xl:text-[56px] xl:leading-[64px] uppercase mb-4">
                  {technology.name}
                </h1>
                <p className="text-[15px] leading-[25px] text-tealish-blue max-w-[327px] md:max-w-[458px] xl:max-w-[42ch] text-base xl:text-lg md:leading-7 xl:leading-8">
                  {technology.description}
                </p>
              </div>
            </div>

            <div className="h-auto xl:w-auto mb-14 xl:mb-0">
              <picture>
                <source
                  media="(max-width: 1279px)"
                  srcSet={technology.images.landscape}
                />
                <img src={technology.images.portrait} alt={technology.name} />
              </picture>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Technology;
