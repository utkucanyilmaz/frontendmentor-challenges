import phones from "images/illustration-phones.svg";

export default function Mobile() {
  return (
    <div className="container mx-auto relative">
      <section className="absolute -top-16 left-1/2 -translate-x-1/2 w-full grid grid-cols-2 place-items-center">
        <img className="z-10" src={phones} alt="" />
        <div className="text-white flex flex-col gap-y-9 z-10 font-overpass">
          <h2 className="text-3xl font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="max-w-lg leading-8">
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
