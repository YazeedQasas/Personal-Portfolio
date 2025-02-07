"use client";

import { useState } from "react";
import { HoverHeading } from "../components/ui/hover-heading";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("yazidqasas@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email");
    }
  };

  return (
    <motion.div 
      className="relative flex flex-col items-center justify-center py-10 -mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div
        className="text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        <HoverHeading>Contact Me</HoverHeading>
        
        <motion.button
          onClick={handleCopyEmail}
          className="mt-6 px-8 py-4 bg-slate-900  text-white rounded-lg font-medium
                   hover:bg-violet-700 transition-colors duration-300
                   relative overflow-hidden"
          whileTap={{ scale: 0.95 }}
          whileHover={{ y: -2 }}
        >
          <span className="relative z-10">
            {isCopied ? "Copied! ✨" : "Copy Email"}
          </span>
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            animate={{ opacity: isCopied ? 0.1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
