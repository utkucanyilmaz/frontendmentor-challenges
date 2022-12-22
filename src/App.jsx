import Jobs from "./components/Jobs";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [activeTags, setActiveTags] = useState([]);

  return (
    <>
      <Header activeTags={activeTags} setActiveTags={setActiveTags} />
      <main className="bg-light-grayish-cyan h-screen">
        <div className="container mx-auto py-20">
          <Jobs activeTags={activeTags} setActiveTags={setActiveTags} />
        </div>
      </main>
    </>
  );
}

export default App;
