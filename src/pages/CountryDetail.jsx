import axios from "axios";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Loading from "../components/Loading";
import BackButton from "../components/BackButton";
import Map from "../components/Map";

function CountryDetail() {
  const { country_name } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borders, setBorders] = useState(null);
  const [additionalData, setAdditionalData] = useState({});

  useEffect(() => {
    setLoading(true);

    async function getCountryData() {
      try {
        const { data } = await axios(
          `https://restcountries.com/v3.1/name/${country_name}?fullText=true`
        );
        setCountry(data[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    getCountryData();
  }, [country_name]);

  useEffect(() => {
    if (country) {
      setAdditionalData(convertCountryData(country));
      setBordersFromAlphaCodes(country);
    }
  }, [country]);

  async function setBordersFromAlphaCodes({ borders }) {
    if (!borders || borders.length === 0) return;
    try {
      const { data } = await axios(
        `https://restcountries.com/v3.1/alpha?codes=${borders
          .join(",")
          .toLowerCase()}`
      );
      setBorders(data.map(border => border.name.common));
    } catch (error) {
      console.log(error);
    }
  }

  function convertCountryData({ name, currencies, languages }) {
    const nativeName =
      name.nativeName &&
      Object.values(name.nativeName)
        .map(nativeName => nativeName.common)
        .join(", ");

    const currenciesList =
      currencies &&
      Object.values(currencies)
        .map(currency => currency.name)
        .join(", ");

    const languagesList = languages && Object.values(languages).join(", ");
    return {
      nativeName,
      currencies: currenciesList,
      languages: languagesList,
    };
  }

  return (
    <section className="mx-4 mb-6 flex flex-col gap-y-7">
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="my-4 sm:my-8 sm:ml-0">
            <BackButton />
          </div>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            <div className="mx-auto my-auto h-full w-auto md:mx-0 xl:w-[560px]">
              <img
                className="w-full"
                src={country.flags.png}
                alt={country.flags.alt}
              />
            </div>
            <div className="mr-6 flex flex-col gap-y-10 text-left font-nunito font-medium text-neutral-dark-blue-800 transition-colors dark:text-white md:my-auto">
              <h1 className="mt-10 text-3xl font-extrabold sm:mt-0">
                {country.name.common}
              </h1>
              <div className="flex flex-col justify-between gap-y-8 lg:flex-row">
                <div className="flex flex-col gap-y-1 md:gap-y-3">
                  <div>
                    <span className="font-extrabold">Native Name: </span>
                    {additionalData.nativeName}
                  </div>
                  <div>
                    <span className="font-extrabold">Population: </span>
                    {Intl.NumberFormat().format(country.population)}
                  </div>
                  <div>
                    <span className="font-extrabold">Region: </span>
                    {country.region}
                  </div>
                  <div>
                    <span className="font-extrabold">Sub Region: </span>
                    {country.subregion}
                  </div>
                  <div>
                    <span className="font-extrabold">Capital: </span>
                    {country.capital?.length > 0 && country.capital[0]}
                  </div>
                </div>
                <div className="flex flex-col gap-y-1 md:gap-y-3">
                  <div>
                    <span className="font-extrabold">Top Level Domain: </span>
                    {country.tld?.length > 0 && country.tld[0]}
                  </div>
                  <div>
                    <span className="font-extrabold">Currencies: </span>
                    {additionalData.currencies}
                  </div>
                  <div>
                    <span className="font-extrabold">Languages: </span>
                    {additionalData.languages}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row flex-wrap items-center gap-y-2 lg:items-center">
                  <span className="mr-4 inline-flex font-extrabold">
                    Border Countries:{" "}
                  </span>

                  {!borders
                    ? "None"
                    : borders.map((border, key) => (
                        <Link
                          to={`/${border.toLowerCase()}`}
                          key={key}
                          className="mr-2 rounded bg-white px-4 py-1 text-neutral-dark-blue-800 shadow transition-colors hover:shadow-xl dark:bg-neutral-dark-blue-500 dark:text-white"
                        >
                          {border}
                        </Link>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!loading && <Map country={country} />}
    </section>
  );
}

export default CountryDetail;
