import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
          <Link 
            href="/"
            className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-bold"
          >
            HN
          </Link>
          <p className="text-slate-300 mt-2 text-sm">Building digital experiences, one line at a time.</p>
        </div>

        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <div className="socials flex flex-row gap-4 mb-4">            <Link 
              href="https://github.com/Harshnama123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <Image src={GithubIcon} alt="Github Icon" className="w-8 h-8" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/harsh-namdev-b01441264/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" className="w-8 h-8" />
            </Link>
          </div>
          <div className="text-slate-300 text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Harsh Namdev. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
