import Link from "next/link";
import Image from "next/image";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-300 text-gray-300 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link
              href="/"
              className="text-lg font-bold flex gap-2 items-center"
            >
              <Image
                src="/logo.png"
                height={30}
                width={30}
                alt="Acme Notes"
                className="object-contain"
              />
              Acme Notes
            </Link>
          </div>

          {/* Product Links */}
          <FooterSection title="Product">
            <FooterLink href="/features" title="Features" />
            <FooterLink href="/pricing" title="Pricing" />
            <FooterLink href="/download" title="Download" />
          </FooterSection>

          {/* Legal Information */}
          <FooterSection title="Legal">
            <FooterLink href="/privacy" title="Privacy Policy" />
            <FooterLink href="/terms" title="Terms of Service" />
          </FooterSection>
        </div>
        <div className="text-center mt-6 text-sm ">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
