import Header from "components/Header";
import Hero from "components/Hero";
import Design from "components/Design";
import Mobile from "components/Mobile";
import Product from "components/Product";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <div className="h-[600px] md:bg-gradient-to-r bg-gradient-to-br from-gr-very-light-red to-gr-light-red rounded-bl-[110px] ">
        <div className="h-full bg-[url(images/bg-pattern-intro-mobile.svg)] md:bg-[url(images/bg-pattern-intro-desktop.svg)] bg-no-repeat bg-[-12rem_-18rem] md:bg-[-30rem_-80rem]">
          <Header />
          <Hero />
        </div>
      </div>
      <Design />

      <div className="h-[600px] md:h-[400px] w-full bg-gradient-to-r from-gr-very-dark-gray-blue to-gr-very-dark-desaturated-blue rounded-bl-[110px] rounded-tr-[110px] relative before:bg-circle before:bg-[center_-10rem] before:bg-contain md:before:bg-auto before:bg-no-repeat before:absolute before:inset-0 md:before:bg-[-13.4rem_-33rem] mt-60 md:mt-0">
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
