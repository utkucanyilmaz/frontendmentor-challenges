import { useEffect } from "react";
import { useFilter } from "../context/FilterContext";
import CountryCard from "./CountryCard";
import Loading from "./Loading";

function CountryBoard() {
  const { filtered, page, setPage } = useFilter();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage(page => page + 1);
    }
  };

  const renderCountries = () => {
    const countriesPerPage = 10;
    const start = 0;
    const end = page * countriesPerPage;
    return filtered
      .slice(start, end)
      .map((country, index) => (
        <CountryCard
          key={index}
          flagSrc={country.flags.png}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          alt={country.flags.alt}
        />
      ));
  };

  return filtered ? (
    <section className="container mx-auto grid grid-cols-1 place-items-center gap-8 py-4 sm:grid-cols-2 sm:gap-y-10 sm:py-10 lg:grid-cols-3 lg:gap-16 lg:py-12 xl:grid-cols-4 2xl:grid-cols-5">
      {renderCountries()}
    </section>
  ) : (
    <Loading />
  );
}

export default CountryBoard;
