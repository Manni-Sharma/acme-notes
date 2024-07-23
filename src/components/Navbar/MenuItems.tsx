import { MENU_ITEMS } from "@/constants";
import Link from "next/link";
import React from "react";

const MenuItems: React.FC<{ className: string; linkClass?: string }> = ({
  className,
  linkClass,
}) => {
  return (
    <div className={className}>
      {MENU_ITEMS?.map((item, index) => {
        return (
          <Link
            key={index}
            className={`hover:text-purple-500 ${linkClass}`}
            href={item?.route}
          >
            {item?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuItems;
