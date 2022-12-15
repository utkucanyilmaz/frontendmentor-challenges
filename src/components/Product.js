import Title from "./ui/Title";
import Paragraph from "./ui/Paragraph";

export default function Product() {
  return (
    <section className="container mx-auto py-24">
      <div className="grid grid-cols-2 place-items-center">
        <div className="relative before:bg-desktop before:bg-no-repeat before:absolute before:inset-0 before:bg-[-13.4rem] w-full h-full"></div>
        <div className="py-44 flex flex-col gap-y-14 place-content-center">
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
