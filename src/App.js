import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="h-[600px] bg-gradient-to-r from-gr-very-light-red to-gr-light-red rounded-bl-[110px] ">
        <div className="h-full bg-[url(./images/bg-pattern-intro-desktop.svg)] bg-center bg-no-repeat ">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
