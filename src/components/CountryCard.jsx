import React from "react";

function CountryCard({ flagSrc, name, population, region, capital }) {
  const formattedPopulation = new Intl.NumberFormat().format(population);

  return (
    <a
      href="#"
      className="flex max-w-max cursor-pointer flex-col gap-y-8 overflow-hidden rounded bg-neutral-dark-blue-500 text-sm hover:bg-opacity-70"
    >
      <div className="flex h-40 w-64 items-center justify-start">
        <img
          src={flagSrc}
          alt={`${name} Flag`}
          className="aspect-video h-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-y-1 px-6  pb-10 text-white">
        <p className="mb-4 text-lg font-bold">{name}</p>
        <p>
          <span className="font-semibold">Population: </span>
          {formattedPopulation}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {capital}
        </p>
      </div>
    </a>
  );
}

export default CountryCard;
