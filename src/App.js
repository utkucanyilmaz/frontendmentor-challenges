import Header from "components/Header";
import Hero from "components/Hero";
import Design from "components/Design";
import Mobile from "components/Mobile";
import Product from "components/Product";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <div className="h-[600px] bg-gradient-to-r from-gr-very-light-red to-gr-light-red rounded-bl-[110px] ">
        <div className="h-full bg-[url(images/bg-pattern-intro-mobile.svg)] md:bg-[url(images/bg-pattern-intro-desktop.svg)] bg-no-repeat bg-[-9rem_-20rem] md:bg-[-30rem_-80rem]">
          <Header />
          <Hero />
        </div>
      </div>
      <Design />

      <div
        className=" h-[400px] bg-gradient-to-r from-gr-very-dark-gray-blue to-gr-very-dark-desaturated-blue rounded-bl-[110px]
    rounded-tr-[110px] relative before:bg-circle before:bg-no-repeat before:absolute before:inset-0 before:bg-[-13.4rem_-33rem]"
      >
        <Mobile />
      </div>
      <Product />
      <div className="bg-very-dark-black-blue rounded-tr-[110px] py-20">
        <Footer />
      </div>
    </>
  );
}

export default App;
