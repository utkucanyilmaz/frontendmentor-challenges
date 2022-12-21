import Jobs from "./components/Jobs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="bg-light-grayish-cyan h-screen">
        <div className="container mx-auto py-20">
          <Jobs />
        </div>
      </main>
    </>
  );
}

export default App;
