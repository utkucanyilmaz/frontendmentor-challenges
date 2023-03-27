import React from "react";

function Home() {
  return (
    <main className="flex justify-between items-end mt-64 mx-16">
      <div className="flex flex-col gap-y-6">
        <div className="text-28 text-tealish-blue font-barlow-condensed tracking-header">
          SO, YOU WANT TO TRAVEL TO
        </div>

        <h1 className="text-150 leading-[172px] text-white">SPACE</h1>

        <p className="text-tealish-blue max-w-[45ch] leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="text-dark-blue bg-white uppercase rounded-full font-bellefair text-3xl h-[274px] w-[274px] relative group z-10">
        <div className="h-full w-full rounded-full bg-white bg-opacity-75 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  group-hover:scale-150 transition-transform -z-10 opacity-20"></div>
        Explore
      </button>
    </main>
  );
}

export default Home;
