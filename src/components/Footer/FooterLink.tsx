import Link from "next/link";
import React from "react";

const FooterLink: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <Link
      href={href}
      className="text-gray-400 flex flex-col hover:text-white pr-2"
    >
      {title}
    </Link>
  );
};

export default FooterLink;
