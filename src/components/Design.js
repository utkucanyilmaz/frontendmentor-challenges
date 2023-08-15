import Title from "./ui/Title";
import Paragraph from "./ui/Paragraph";
import { useWindowWidth } from "@react-hook/window-size";
import Editor from "images/illustration-editor-mobile.svg";

export default function Design() {
  const windowWidth = useWindowWidth();
  return (
    <section className="container mx-auto py-18 mb-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-very-dark-blue text-center font-overpass pt-24">
        Designed for the future
      </h2>
      <div className="grid grid-cols-1 text-center md:text-left px-8 md:px-0 md:grid-cols-2 gap-y-6 md:gap-y-0 place-items-center md:place-items-start">
        {windowWidth < 768 && <img className="mt-10" src={Editor}></img>}
        <div className="py-0 md:py-44 flex flex-col gap-y-14 place-content-center">
          <div className="flex flex-col gap-y-6 max-w-lg">
            <Title>Introducing an extensible editor</Title>
            <Paragraph>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </Paragraph>
          </div>
          <div className="flex flex-col gap-y-6 max-w-lg">
            <Title>Robust content management</Title>
            <Paragraph>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </Paragraph>
          </div>
        </div>

        {windowWidth >= 768 && (
          <div
            className="relative  before:bg-hero before:bg-no-repeat  
        before:absolute before:bg-center  before:w-[925px] before:h-[882px] before:left-16 before:-top-16"
          ></div>
        )}
      </div>
    </section>
  );
}
