import { useFilter } from "../context/FilterContext";
import CountryCard from "./CountryCard";

function CountryBoard() {
  const { filtered } = useFilter();

  return filtered ? (
    <section className="container mx-auto grid grid-cols-1 place-items-center gap-8 py-4 sm:grid-cols-2 sm:gap-y-10 sm:py-10 lg:grid-cols-3 lg:gap-16 lg:py-12 xl:grid-cols-4 2xl:grid-cols-5">
      {filtered.map(
        (
          {
            flags: { png: flag, alt },
            name: { common },
            population,
            region,
            capital,
          },
          index
        ) => (
          <CountryCard
            key={index}
            flagSrc={flag}
            name={common}
            population={population}
            region={region}
            capital={capital}
            alt={alt}
          />
        )
      )}
    </section>
  ) : (
    <div className="mt-20 flex items-center justify-center text-white">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default CountryBoard;
