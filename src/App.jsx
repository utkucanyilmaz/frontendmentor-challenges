import Header from "./components/Header";
import CountryBoard from "./components/CountryBoard";
import FilteringSection from "./components/FilteringSection";

import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <div className="flex min-h-screen flex-col gap-y-8 bg-neutral-gray-100 font-nunito dark:bg-neutral-dark-blue-700">
        <Header />
        <div className="container mx-auto">
          <FilteringSection />
          <CountryBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
