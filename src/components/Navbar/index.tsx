"use client";
import { useState } from "react";
import Link from "next/link";
import MenuItems from "./MenuItems";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 text-white fixed top-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex gap-2 items-center">
          <Image
            src="/logo.png"
            height={50}
            width={50}
            alt="Acme Notes"
            className="object-contain"
          />
          Acme Notes
        </Link>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          {isOpen ? (
            <div className="w-6 h-6 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          ) : (
            <div className="w-6 h-6 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
        </div>
        <MenuItems className="hidden md:flex md:space-x-4" />
      </div>
      <MenuItems
        className={`md:hidden ${isOpen ? "block" : "hidden"} mt-4`}
        linkClass="block px-4 py-2"
      />
    </nav>
  );
};

export default Navbar;
