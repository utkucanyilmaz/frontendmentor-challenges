import Header from "components/Header";
import Hero from "components/Hero";
import Design from "components/Design";
import Mobile from "components/Mobile";

function App() {
  return (
    <>
      <div className="h-[600px] bg-gradient-to-r from-gr-very-light-red to-gr-light-red rounded-bl-[110px] ">
        <div className="h-full bg-[url(images/bg-pattern-intro-desktop.svg)] bg-no-repeat bg-[0]">
          <Header />
          <Hero />
        </div>
      </div>
      <Design />
      <Mobile />
    </>
  );
}

export default App;
