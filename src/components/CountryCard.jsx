import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ flagSrc, name, population, region, capital, alt }) {
  const formattedPopulation = new Intl.NumberFormat().format(population);

  return (
    <Link to={`/${name.toLowerCase()}`} className="country-card">
      <div className="flex h-40 w-72 items-center justify-start sm:w-64">
        <img
          src={flagSrc}
          alt={alt}
          className="aspect-video h-full w-full overflow-hidden"
        />
      </div>

      <div className="flex flex-col gap-y-1 px-6 pb-9 text-neutral-dark-blue-800 transition-colors dark:text-white">
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
    </Link>
  );
}

export default CountryCard;
