'use client'

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { MagicButton } from './ui/MagicButton'
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 -mb-60 ">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill ="white"/>
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill ="purple"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill ="blue"/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="tracking-widest text-cs text-center text-blue-100 max-w-80">
           YAZEED A. QASAS | CE Student
          </h2>

          <TextGenerateEffect 
           className="text-center text-[40px] md:text-5xl lg:text-6xl"
           words="Driving innovation and creating a brighter digital future."
          />

         

          <a onClick={()=> window.open("https://github.com/YazeedQasas", "_blank")} className="-mb-5">
            <MagicButton
            title="Show my work"
            icon={<FaGithub />}
            position="right"
             />
          </a>

          <p className="text-center text-white md:tracking-widertext-sm md:text-lg lg:text-xl -mb-20 mt-20">
              Let&apos;s get in <span className="text-purple font-bold">contact!</span>
          </p>
        </div>
      </div>
    </div>
  )



}

export default Hero