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
    (async function getCountryData() {
      try {
        await axios(
          `https://restcountries.com/v3.1/name/${country_name}?fullText=true`
        ).then(({ data }) => {
          setCountry(data[0]);
        });

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (country) {
      if (country.borders) {
        setBorderNames(country);
      }

      setAdditionalData(() => convertObjData(country));
    }
  }, [country]);

  async function setBorderNames(obj) {
    const { data: bordersData } = await axios(
      `https://restcountries.com/v3.1/alpha?codes=${obj.borders
        .join(",")
        .toLowerCase()}`
    );

    setBorders(() => bordersData.map(border => border.name.common));
  }

  function convertObjData(obj) {
    const nativeName =
      obj.name.nativeName &&
      Object.values(obj.name.nativeName)
        .map(nativeName => nativeName.common)
        .join(", ");

    const currencies =
      obj.currencies &&
      Object.values(obj.currencies)
        .map(currency => currency.name)
        .join(", ");

    const languages = obj.languages && Object.values(obj.languages).join(", ");

    return { nativeName, currencies, languages };
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
                          reloadDocument
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
