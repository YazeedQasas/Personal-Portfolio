
"use client";

import { motion } from "framer-motion";

interface HoverHeadingProps {
  children: React.ReactNode;
}

export const HoverHeading = ({ children }: HoverHeadingProps) => {
  return (
    <motion.h1
      className="text-7xl font-bold bg-gradient-to-r from-violet-700 to-violet-400 bg-clip-text text-transparent cursor-pointer"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.h1>
  );
};
