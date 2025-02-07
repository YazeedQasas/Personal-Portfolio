"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Find my CV <br />
              <span className="text-4xl md:text-[6rem] md:text-5xl  bg-gradient-to-r from-violet-700 to-violet-400 bg-clip-text text-transparent font-bold mt-1 leading-none">
                For Work Inquiries
              </span>
            </h1>
          </>
        }
      >
        <div className="relative flex flex-col items-center">
          <Image
            src={`/resumepic.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
          
          <motion.a
            href="https://drive.google.com/file/d/1kvBOMbPUgpkrFOQGqLYb241Q-3R02TRb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-4 bg-violet-600 text-white rounded-lg font-medium
                     hover:bg-violet-700 transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full CV
          </motion.a>
        </div>
      </ContainerScroll>
    </div>
  );
}
