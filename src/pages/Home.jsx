import React from "react";

function Home() {
  const navItems = ["home", "destination", "crew", "technology"];

  return (
    <>
      <header className="flex items-center justify-between h-48">
        <div>
          <img src="assets/shared/logo.svg" alt="Logo" />
        </div>
        <nav className="font-barlow-condensed flex gap-x-12 text-white backdrop-blur-xl pl-32 pr-40">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex gap-x-3 uppercase py-10 border-b-[3px] hover:border-hover"
            >
              <span className="font-bold">0{idx}</span>
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main className="flex justify-between mt-64 mx-28">
        <div className="flex flex-col gap-y-6">
          <div className="text-28 text-tealish-blue font-barlow-condensed tracking-[4.72px]">
            SO, YOU WANT TO TRAVEL TO
          </div>
          <h1 className="text-150 leading-[172px] text-white">SPACE</h1>
          <p className="text-tealish-blue max-w-[45ch] leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <button className="text-dark-blue bg-white uppercase rounded-full font-bellefair text-3xl h-[274px] w-[274px]">
          Explore
        </button>
      </main>
    </>
  );
}

export default Home;
