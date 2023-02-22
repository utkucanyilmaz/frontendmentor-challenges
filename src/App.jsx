import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CountryBoard from "./components/CountryBoard";

function App() {
  return (
    <div className="bg-neutral-dark-blue-700 font-nunito">
      <Header />
      <SearchBar />
      <DropdownMenu />
      <CountryBoard />
    </div>
  );
}

export default App;
