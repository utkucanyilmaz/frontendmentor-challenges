import btnArrow from "/images/icon-arrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Info from "./components/Info";

function App() {
  const [clientIP, setClientIP] = useState("");

  const getClientIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setClientIP(res.data.IPv4);
  };

  useEffect(() => {
    getClientIP();
  }, []);

  return (
    <div className="h-screen bg-red-500  font-rubik text-black">
      <div
        className="relative flex h-[280px] w-full flex-col items-center justify-start bg-pattern-desktop bg-cover bg-center
        bg-no-repeat"
      >
        <h1 className="py-8 text-3xl text-white">IP Address Tracker</h1>

        <div className="flex h-14 w-[555px] overflow-hidden rounded-2xl">
          <input
            placeholder="Search for any IP address or domain"
            type="text"
            className="h-full w-full px-6 text-lg placeholder:text-dark-gray"
          />

          <button className="flex h-14 w-14 items-center justify-center bg-black hover:bg-very-dark-gray">
            <img src={btnArrow} alt="Submit button" />
          </button>
        </div>

        <Info />
      </div>
    </div>
  );
}

export default App;
