import Header from "./components/Header";
import CountryBoard from "./components/CountryBoard";
import FilteringSection from "./components/FilteringSection";

function App() {
  return (
    <div className="flex flex-col gap-y-8">
      <Header />
      <div className="container mx-auto ">
        <FilteringSection />
        <CountryBoard />
      </div>
    </div>
  );
}

export default App;
