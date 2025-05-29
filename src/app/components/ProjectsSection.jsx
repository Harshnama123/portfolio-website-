"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [  {
    id: 1,
    title: "Advanced Attendance System",
    description: "Real-time attendance management system with facial recognition, featuring dashboard analytics, class management, and automated attendance tracking. Built with Python, Flask, and facial recognition technology.",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "ML"],
    gitUrl: "https://github.com/Harshnama123",
    previewUrl: "/",
  },  {
    id: 2,
    title: "Gesture Volume Control",
    description: "Interactive system that controls system volume through hand gestures. Built with OpenCV for hand tracking and features real-time volume adjustment visualization with a percentage indicator.",
    image: "/images/projects/2.png",
    tag: ["All", "ML"],
    gitUrl: "https://github.com/Harshnama123",
    previewUrl: "/",
  },  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, React, and Tailwind CSS. Features responsive design, animations, and contact form integration.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Harshnama123",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { 
      y: 50, 
      opacity: 0,
      scale: 0.9
    },
    animate: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />        <ProjectTag
          onClick={handleTagChange}
          name="ML"
          isSelected={tag === "ML"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
