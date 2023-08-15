import Jobs from "./components/Jobs";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  return (
    <>
      <Header activeTags={activeTags} setActiveTags={setActiveTags} />
      <main className="container mx-auto py-20 px-4">
        <Jobs activeTags={activeTags} setActiveTags={setActiveTags} />
      </main>
    </>
  );
}

export default App;
