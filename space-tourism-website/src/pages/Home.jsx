import React from "react";
import { Link } from "react-router-dom";
import AnimatePages from "../components/AnimatePages";

function Home() {
  return (
    <AnimatePages>
      <main className="flex flex-col items-center xl:flex-row justify-between xl:items-end mt-6 md:mt-24 xl:mt-0 xl:min-h-[60vh] xl:mx-16 text-center xl:text-start">
        <div className="flex flex-col gap-y-4 md:gap-y-6 mb-10 md:mb-40 xl:mb-0">
          <div className="text-base md:text-xl xl:text-28 text-tealish-blue font-barlow-condensed xl:tracking-header">
            SO, YOU WANT TO TRAVEL TO
          </div>

          <h1 className="text-[80px] leading-[100px] md:text-150 md:leading-[172px] text-white">
            SPACE
          </h1>

          <p className="text-tealish-blue text-[15px] leading-6 max-w-[327px] md:max-w-[444px] xl:max-w-[45ch] xl:leading-8 md:text-base xl:text-lg">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/destination"
          className="text-dark-blue bg-white uppercase rounded-full font-bellefair text-xl tracking-[1.25px] md:text-3xl w-[150px] h-[150px] md:w-[242px] md:h-[242px] xl:h-[274px] xl:w-[274px] relative group z-10 flex items-center justify-center"
        >
          <div className="h-full w-full rounded-full bg-white bg-opacity-75 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  group-hover:scale-150 transition-transform -z-10 opacity-20"></div>
          Explore
        </Link>
      </main>
    </AnimatePages>
  );
}

export default Home;
