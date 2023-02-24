import Header from "./components/Header";
import CountryBoard from "./components/CountryBoard";
import FilteringSection from "./components/FilteringSection";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <div className={`${theme}`}>
      <div className="flex min-h-screen flex-col gap-y-8 bg-neutral-gray-100 font-nunito transition-colors dark:bg-neutral-dark-blue-700">
        <Header theme={theme} setTheme={setTheme} />
        <div className="container mx-auto">
          <FilteringSection />
          <CountryBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
