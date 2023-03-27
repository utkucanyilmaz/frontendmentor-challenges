import { useState, useEffect } from "react";
import data from "../data.json";

function Crew() {
  const [crew, setCrew] = useState("");
  useEffect(() => {
    setCrew(data.crew[0]);
  }, []);

  useEffect(() => {
    console.log(crew);
  }, [crew]);

  return (
    <main className="text-white ml-16 mt-20 flex flex-col gap-y-16">
      {crew && (
        <>
          <div className="uppercase font-barlow-condensed flex gap-x-7 tracking-header text-28">
            <span className="opacity-25">02</span> Meet Your Crew
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div className="mb-32">
                <h2 className="text-white text-opacity-50 uppercase text-[32px] leading-9 mb-4">
                  {crew.role}
                </h2>
                <h1 className="text-white uppercase text-[56px] leading-[64px] mb-7 min-w-[45ch]">
                  {crew.name}
                </h1>
                <p className="text-tealish-blue max-w-[44ch] leading-8">
                  {crew.bio}
                </p>
              </div>
              <div className="flex gap-x-6 mb-24">
                <div className="w-4 h-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-white bg-opacity-20 hover:bg-opacity-50 cursor-pointer"></div>
              </div>
            </div>

            <div>
              <div className="absolute bottom-0">
                <img src={crew.images.png} alt={crew.name} />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Crew;
