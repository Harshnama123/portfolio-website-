"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#181818] rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Languages & Core</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">C/C++</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">Python</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">JavaScript</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">DSA</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">OOP</span>
          </div>
        </div>

        <div className="bg-[#181818] rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Web Development</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">React.js</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Next.js</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">HTML5</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">CSS3</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Tailwind</span>
          </div>
        </div>

        <div className="bg-[#181818] rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">ML & Computer Vision</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">TensorFlow</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">PyTorch</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">OpenCV</span>
            <span className="bg-primary-500/20 text-primary-500 rounded-full px-3 py-1 text-sm">Mediapipe</span>
          </div>
        </div>

        <div className="bg-[#181818] rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-white">Tools & Databases</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Git</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Git-Hub</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">MongoDB</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">SQL</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">VS Code</span>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Postman</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (      <div className="grid grid-cols-1 gap-6">
        <div className="bg-[#181818] rounded-xl p-6 transition-all hover:bg-[#1f1f1f]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎓</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">Rajasthan Technical University, Kota</h3>
              <p className="text-gray-400 mb-2">B.Tech in Computer Science and Engineering (CSE)</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-500">Oct 2021 – April 2025</span>
                <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">GPA: 7.87/10</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] rounded-xl p-6 transition-all hover:bg-[#1f1f1f]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🏫</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">M B I Sr. Sec. School, Kota</h3>
              <p className="text-gray-400 mb-2">Higher Secondary (XII), RBSE</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-500">June 2020</span>
                <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">70.20%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#181818] rounded-xl p-6 transition-all hover:bg-[#1f1f1f]">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🏫</span>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-white">M.B. INT School, Kota</h3>
              <p className="text-gray-400 mb-2">Secondary (X), CBSE</p>
              <div className="flex justify-between items-center">
                <span className="text-primary-500">June 2018</span>
                <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">77%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications & Experience",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-[#181818] rounded-xl p-6 transition-all hover:bg-[#1f1f1f]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Full Stack Development Intern</h3>
              <p className="text-primary-500 font-semibold">CodeAlpha</p>
            </div>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Completed</span>
          </div>
          <p className="text-gray-400 mt-2 text-sm">May 2024 – June 2024</p>
          <ul className="list-disc text-gray-300 mt-2 ml-4">
            <li>Working on full-stack web development projects</li>
            <li>Implementing modern web technologies and best practices</li>
          </ul>
        </div>

        <div className="bg-[#181818] rounded-xl p-6 transition-all hover:bg-[#1f1f1f]">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-white">Web Development Intern</h3>
              <p className="text-primary-500 font-semibold">Octanet</p>
            </div>
            <span className="bg-secondary-500/20 text-secondary-500 rounded-full px-3 py-1 text-sm">Completed</span>
          </div>
          <p className="text-gray-400 mt-2 text-sm">May 2023 – June 2023</p>
          <ul className="list-disc text-gray-300 mt-2 ml-4">
            <li>Developed responsive and interactive web applications</li>
            <li>Collaborated with team members on various projects</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-2">
          <Image 
            src="/images/about-image.png" 
            width={500} 
            height={500}
            className="rounded-xl"
            alt="About me image"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Full Stack Web Developer passionate about building interactive,
            scalable, and visually engaging web applications. I specialize in
            JavaScript, TypeScript, React, Next.js, Node.js, Express.js, MongoDB, MySQL,
            Tailwind CSS, and Git.
            Proficient with deployment and cloud tools like
            Render, Vercel, and MongoDB Atlas, I am a quick learner and problem solver who thrives in collaborative environments. I continuously strive to learn new technologies and contribute to impactful projects.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
