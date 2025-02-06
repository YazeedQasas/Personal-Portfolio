// @/components/project-section.tsx
"use client";

import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Robotics Programming",
    description: "Programmed and built a robot for a competition",
    imageSrc: "/robot.jpeg",
  },
  {
    title: "Buck-to-buck converter",
    description: "PCB for lowering high voltage",
    imageSrc: "/circuit.jpeg",
  },
  {
    title: "Job-Posting Website",
    description: "Maharat website for job-postings",
    imageSrc: "/maharat.png",
  },
];

export const ProjectSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br  py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center text-5xl font-bold text-white"
        >
          My Projects
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
