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
    <div className="container mx-auto grid grid-cols-5 gap-16 py-12">
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
    </div>
  );
}

export default CountryBoard;
