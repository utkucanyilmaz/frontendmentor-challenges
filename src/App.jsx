import DropdownMenu from "./components/DropdownMenu";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="h-screen bg-neutral-dark-blue-700 font-nunito">
      <Header />
      <SearchBar />
      <DropdownMenu />
    </div>
  );
}

export default App;
