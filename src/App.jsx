import Header from "./components/Header";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation().pathname.split("/")[1];
  let bgImage;

  switch (location) {
    case "destination":
      bgImage =
        "bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop";
      break;

    case "crew":
      bgImage = "bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop";
      break;

    case "technology":
      bgImage =
        "bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop";
      break;

    default:
      bgImage = "bg-home-mobile md:bg-home-tablet xl:bg-home-desktop";
      break;
  }

  return (
    <div
      className={`xl:h-screen bg-no-repeat bg-cover bg-dark-blue xl:overflow-hidden antialiased ${bgImage} pb-10`}
    >
      <div className="absolute h-24 w-[56%] lg:w-[45%] xl:w-[57%] right-0 backdrop-blur-lg bg-white bg-opacity-5 xl:mt-12"></div>
      <div className="container mx-auto text-lg">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
