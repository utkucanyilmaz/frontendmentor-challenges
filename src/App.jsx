import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./components/Info";
import SearchBar from "./components/SearchBar";
import Location from "./components/Location";
import Loading from "./components/Loading";

function App() {
  const [clientIp, setClientIp] = useState("");
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const getClientIp = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setClientIp(res.data.IPv4);
  };

  const getInfo = async () => {
    setLoading(true);
    if (clientIp) {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=
        at_HmwBCdmMExOb5uX1X99BKdDYRL0lX&ipAddress=${clientIp}`
      );
      setInfo(res.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getClientIp();
  }, []);

  useEffect(() => {
    getInfo();
  }, [clientIp]);

  return (
    <div className="h-screen font-rubik text-black antialiased">
      <div
        className="relative flex h-[280px] w-full flex-col items-center justify-start bg-pattern-mobile bg-cover bg-center
        bg-no-repeat sm:bg-pattern-desktop"
      >
        <h1 className="py-4 text-xl text-white sm:py-8 sm:text-3xl">
          IP Address Tracker
        </h1>
        <SearchBar setClientIp={setClientIp} setLoading={setLoading} />
        <Info info={info} />
      </div>
      {loading ? <Loading /> : <Location info={info} />}
    </div>
  );
}

export default App;
