import { useState, useEffect } from "react";
import data from "../data.json";

function Technology() {
  const [technology, setTechnology] = useState("");
  useEffect(() => {
    setTechnology(data.technology[0]);
  }, []);

  useEffect(() => {
    console.log(technology);
  }, [technology]);
  return (
    <main className="text-white ml-16 mt-20 flex flex-col">
      {technology && (
        <>
          <div className="uppercase font-barlow-condensed flex gap-x-7 tracking-header text-28">
            <span className="opacity-25">03</span>Space Launch 101
          </div>

          <div className="mt-7 flex justify-between items-center">
            <div className="flex gap-x-20">
              <div className="flex flex-col gap-y-8">
                <div className="w-20 h-20 flex items-center justify-center bg-white text-dark-blue text-3xl font-bellefair rounded-full ">
                  1
                </div>
                <div className="w-20 h-20 flex items-center justify-center bg-transparent text-white border border-white text-3xl border-opacity-50 font-bellefair rounded-full hover:border-opacity-100 cursor-pointer">
                  2
                </div>
                <div className="w-20 h-20 flex items-center justify-center bg-transparent border text-white border-white text-3xl border-opacity-50 font-bellefair rounded-full hover:border-opacity-100 cursor-pointer">
                  3
                </div>
              </div>
              <div>
                <div className="font-barlow-condensed text-tealish-blue text-base tracking-nav mb-3">
                  THE TERMINOLOGY…
                </div>
                <h1 className="text-[56px] leading-[64px] uppercase mb-4">
                  {technology.name}
                </h1>
                <p className="text-tealish-blue max-w-[42ch] leading-8">
                  {technology.description}
                </p>
              </div>
            </div>

            <div>
              <img src={technology.images.portrait} alt={technology.name} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Technology;
