import axios from "axios";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountryBoard() {
  const getCountries = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  const [countries, setCountries] = useState(null);

  useEffect(() => {
    (async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    })();
  }, []);

  return (
    <section className="container mx-auto grid grid-cols-1 place-items-center gap-8 py-4 sm:grid-cols-2 sm:gap-y-10 md:py-10 lg:grid-cols-3 lg:gap-16 lg:py-12 xl:grid-cols-4 2xl:grid-cols-5">
      {countries ? (
        countries.map(
          (
            {
              flags: { png: flag },
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
            />
          )
        )
      ) : (
        <div>Data not found.</div>
      )}
    </section>
  );
}

export default CountryBoard;
