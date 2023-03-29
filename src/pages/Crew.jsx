import { useState, useEffect } from "react";
import data from "../data.json";

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
    <main className="text-white ml-16 mt-20 flex flex-col gap-y-16">
      {crewMember && (
        <>
          <div className="uppercase font-barlow-condensed flex gap-x-7 tracking-header text-28">
            <span className="opacity-25">02</span> Meet Your Crew
          </div>

          <div className="grid grid-cols-2">
            <div>
              <div className="mb-32">
                <h2 className="text-white text-opacity-50 uppercase text-[32px] leading-9 mb-4">
                  {crewMember.role}
                </h2>
                <h1 className="uppercase text-[56px] leading-[64px] mb-7 min-w-[45ch]">
                  {crewMember.name}
                </h1>
                <p className="text-tealish-blue max-w-[44ch] leading-8">
                  {crewMember.bio}
                </p>
              </div>
              <div className="flex gap-x-6">
                {crewButtons.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCrewClick(idx)}
                    className={`w-4 h-4 rounded-full bg-white hover:bg-opacity-50 cursor-pointer transition-colors ${
                      active === idx ? "bg-opacity-100" : "bg-opacity-20"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <div className="absolute bottom-0">
                <img src={crewMember.images.png} alt={crewMember.name} />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Crew;
