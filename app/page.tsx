import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { TimelineDemo } from "@/components/TimelineDemo"
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaProjectDiagram } from "react-icons/fa";
import { TextHoverEffectDemo } from "@/components/TextHoverEffectDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import { AboutMe } from "@/components/about-me";
import { ProjectSection } from "@/components/project-section";
import { ContactSection } from "@/components/contact-section";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '#home', icon: <FaHome />},
          {name: 'Projects', link: '#projects', icon: <FaProjectDiagram />},
          {name: 'About', link: '#about', icon: <IoInformationCircleSharp />},
        ]}/>
        <section id="home">
        <Hero />
        <FloatingDockDemo />
        </section>
        
        <section id="about">
        <AboutMe />
        </section>
        <TimelineDemo />
        <section id="projects">
        <ProjectSection />
        </section>
        
        <ContactSection />
        <HeroScrollDemo />
        
        
      </div>
    </main>
  );
}
