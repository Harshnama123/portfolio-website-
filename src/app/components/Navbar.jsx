"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },

  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (    <nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95 backdrop-blur-sm">      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-8 py-4">        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-primary-500">
            <Image
              src="/images/projects/image.png"
              alt="Harsh Namdev"
              width={64}
              height={64}
              className="object-cover transition-transform duration-300 hover:scale-110"
              priority={true}
            />
          </div>
          <Link
            href={"/"}
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-bold hover:opacity-80 transition-opacity"
          >
            HN
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (<button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded-lg border-primary-400 text-primary-400 hover:text-white hover:border-white transition-colors duration-300"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded-lg border-primary-400 text-primary-400 hover:text-white hover:border-white transition-colors duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
