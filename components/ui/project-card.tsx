"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export const ProjectCard = ({
  title,
  description,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-100/20 bg-gradient-to-b from-gray-900/50 to-gray-800/30 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-gray-100/40"
    >
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};
