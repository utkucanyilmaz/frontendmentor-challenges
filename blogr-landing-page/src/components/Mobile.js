import phones from "images/illustration-phones.svg";

export default function Mobile() {
  return (
    <div className="container mx-auto relative">
      <section className="absolute -top-40 md:-top-16 left-1/2 -translate-x-1/2 w-full grid grid-cols-1 md:grid-cols-2 md:mt-16 lg:mt-0 place-items-center">
        <img className="z-10 max-h-[460px]" src={phones} alt="" />
        <div className="text-white flex flex-col gap-y-9 z-10 font-overpass">
          <h2 className=" text-center md:text-left text-2xl md:text-3xl font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="text-center md:text-left  max-w-xs px-4 md:px-0 md:max-w-lg leading-8">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </div>
  );
}
