"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation              sequence={[
                "Harsh Namdev",
                1000,
                "Full Stack Developer",
                
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full Stack Developer with a strong foundation in web development . Skilled in building scalable, 
            responsive, and user-centric applications using modern technologies. Actively seeking opportunities to contribute to impactful projects, collaborate with forward-thinking teams, and grow as a software engineer.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>            <Link
              href="/docs/Harsh Namdev-CV..pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                View CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero-image-new2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
              priority={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
