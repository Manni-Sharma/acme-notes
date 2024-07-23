import React from "react";

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="w-full md:w-1/4 mb-6 md:mb-0">
      <h4 className="text-lg font-semibold mb-4 text-white">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default FooterSection;
