import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme}`}>
      <div className="flex min-h-screen flex-col gap-y-8 bg-neutral-gray-100 font-nunito dark:bg-neutral-dark-blue-700">
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":country_name" element={<CountryDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
