import Title from "./ui/Title";
import Paragraph from "./ui/Paragraph";
import LaptopImage from "images/illustration-laptop-mobile.svg";
import { useWindowWidth } from "@react-hook/window-size";

export default function Product() {
  const windowWidth = useWindowWidth();
  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-1  md:grid-cols-2 text-center md:text-left px-8 md:px-0 place-items-center relative gap-y-6 md:gap-y-0">
        {windowWidth < 768 && <img src={LaptopImage} alt="" />}
        {windowWidth >= 768 && (
          <div className="before:bg-desktop before:bg-no-repeat before:absolute before:top-0 before:-left-[36rem] lg:before:-left-96 before:w-[974px] before:h-[768px] before:bg-contain"></div>
        )}

        <div className="py-0 md:py-44 flex flex-col gap-y-14 place-content-center">
          <div className="flex flex-col gap-y-6 max-w-lg">
            <Title>Free, open, simple</Title>
            <Paragraph>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-y-6 max-w-lg">
            <Title>Powerful tooling</Title>
            <Paragraph>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
