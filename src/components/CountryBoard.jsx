import { useFilter } from "../context/FilterContext";
import CountryCard from "./CountryCard";
import Loading from "./Loading";

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
    <Loading />
  );
}

export default CountryBoard;
