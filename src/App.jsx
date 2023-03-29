import Header from "./components/Header";
import Destination from "./pages/Destination";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-technology-desktop bg-cover bg-center overflow-hidden antialiased">
      <div className="absolute h-24 w-[57%] right-0 backdrop-blur-lg bg-white bg-opacity-5 mt-12"></div>
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
