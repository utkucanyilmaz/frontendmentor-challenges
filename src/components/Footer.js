import FooterLink from "./ui/FooterLink";
import FooterTitle from "./ui/FooterTitle";
import FooterLogo from "images/logo.svg";

export default function Footer() {
  return (
    <footer className="container mx-auto grid  grid-cols-1 text-center place-items-center md:place-items-start md:text-left md:grid-cols-4 gap-y-12">
      <div>
        <img className="mb-8" src={FooterLogo} alt="" />
      </div>
      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <FooterTitle>Product</FooterTitle>
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <FooterLink>Overview</FooterLink>
          <FooterLink>Pricing</FooterLink>
          <FooterLink>Marketplace</FooterLink>
          <FooterLink>Features</FooterLink>
          <FooterLink>Integrations</FooterLink>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <FooterTitle>Company</FooterTitle>
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <FooterLink>About</FooterLink>
          <FooterLink>Team</FooterLink>
          <FooterLink>Blog</FooterLink>
          <FooterLink>Careers</FooterLink>
        </div>
      </div>
      <div className="flex flex-col gap-y-6 md:gap-y-10">
        <FooterTitle>Connect</FooterTitle>
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          <FooterLink>Contact</FooterLink>
          <FooterLink>Newsletter</FooterLink>
          <FooterLink>LinkedIn</FooterLink>
        </div>
      </div>
    </footer>
  );
}
