import Header from "./components/Header";
import Destination from "./pages/Destination";
import Home from "./pages/Home";

function App() {
  return (
    <div className="h-screen bg-destination-desktop bg-cover bg-center overflow-hidden">
      <div className="absolute h-24 w-[57%] right-0 backdrop-blur-lg bg-white bg-opacity-5 mt-12"></div>
      <div className="container mx-auto text-lg">
        <Header />
        {/* <Home /> */}
        <Destination />
      </div>
    </div>
  );
}

export default App;
