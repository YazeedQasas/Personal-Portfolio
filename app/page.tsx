import Image from "next/image";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { TimelineDemo } from "@/components/TimelineDemo"
import { IoInformationCircleSharp } from "react-icons/io5";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { ThreeDCardDemo1 } from "@/components/ThreeDCardDemo1";
import { ThreeDCardDemo2 } from "@/components/ThreeDCardDemo2";
import { FaProjectDiagram } from "react-icons/fa";
import { TextHoverEffectDemo } from "@/components/TextHoverEffectDemo";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import ProfileDisplay from "@/components/ProfileDisplay";
import { AnimatedTooltipPreview } from "@/components/people";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
          {name: 'Projects', link: '/', icon: <FaProjectDiagram />},
          {name: 'About', link: '/', icon: <IoInformationCircleSharp />},
        ]}/>
        <Hero />
        <FloatingDockDemo />
        <AnimatedTooltipPreview />
        <TimelineDemo />
        <div className="flex flex-row gap-2 lg:gap-5 mr-10">
        <ThreeDCardDemo />
        <ThreeDCardDemo1 />
        <ThreeDCardDemo2 />
        </div>
        
      </div>
    </main>
  );
}
