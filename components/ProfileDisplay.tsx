import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const ProfileDisplay: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 gap-8">
      {/* Left Side: Text and Technologies */}
      <motion.div 
        className="flex flex-col items-start max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate developer skilled in modern web and software technologies. 
          Here are some of the tools I work with:
        </p>
        <div className="flex gap-4">
          <Image src="/react-logo.png" alt="React" width={60} height={60} />
          <Image src="/python-logo.png" alt="Python" width={60} height={60} />
          <Image src="/js-logo.png" alt="JavaScript" width={60} height={60} />
        </div>
      </motion.div>
      
      {/* Right Side: Profile Picture */}
      <motion.div 
        className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="/your-profile.jpg" alt="Your Profile" width={256} height={256} className="object-cover w-full h-full" />
      </motion.div>
    </div>
  );
};

export default ProfileDisplay;
