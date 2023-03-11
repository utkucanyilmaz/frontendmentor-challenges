import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./components/Info";
import SearchBar from "./components/SearchBar";

function App() {
  const [clientIp, setClientIp] = useState("");
  const [info, setInfo] = useState(null);

  const getClientIp = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setClientIp(res.data.IPv4);
  };

  const getInfo = async () => {
    if (clientIp) {
      const res = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=
        at_HmwBCdmMExOb5uX1X99BKdDYRL0lX&ipAddress=${clientIp}`
      );
      setInfo(res.data);
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
        className="relative flex h-[280px] w-full flex-col items-center justify-start bg-pattern-desktop bg-cover bg-center
        bg-no-repeat"
      >
        <h1 className="py-8 text-3xl text-white">IP Address Tracker</h1>
        <SearchBar setClientIp={setClientIp} />
        <Info info={info} />
      </div>
    </div>
  );
}

export default App;
