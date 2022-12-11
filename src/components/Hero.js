export default function Hero() {
  return (
    <>
      <section className="container mx-auto text-white flex flex-col text-center items-center justify-center gap-y-7 mt-24">
        <h1 className="text-6xl font-overpass font-bold tracking-tight">
          A modern publishing platform
        </h1>
        <p className="text-lg opacity-70">
          Grow your audience and build your online brand
        </p>
        <div className="mt-4 flex gap-x-4">
          <button className="bg-white text-light-red font-semibold px-4 py-3 rounded-full leading-4 text-center h-12 hover:bg-very-light-red hover:text-white transition-colors ">
            Start for Free
          </button>
          <button className="bg-transparent text-white border border-white font-semibold px-4 py-3 rounded-full leading-4 text-center h-12 hover:bg-white hover:text-very-light-red transition-colors ">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
}
