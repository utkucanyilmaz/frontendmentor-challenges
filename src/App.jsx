import Job from "./components/Job";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="bg-light-grayish-cyan h-screen">
        <div className="container mx-auto px-40 py-20">
          <Job />
        </div>
      </main>
    </>
  );
}

export default App;
