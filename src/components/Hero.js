import Button from "./ui/Button";
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
          <Button className="px-4 bg-white text-light-red hover:bg-very-light-red hover:text-white">
            Start for Free
          </Button>
          <Button className="px-4 bg-transparent border border-white text-white hover:bg-white hover:text-very-light-red">
            Learn More
          </Button>
        </div>
      </section>
    </>
  );
}
