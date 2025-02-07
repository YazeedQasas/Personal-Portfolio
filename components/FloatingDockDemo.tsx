'use client'

import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import { IconBrandGithub,
         IconBrandX,
} from "@tabler/icons-react";

import { FaLinkedin,
         FaInstagram,
         FaFacebook, 
 } from "react-icons/fa";

import Image from "next/image";
import { FaLink } from "react-icons/fa6";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" onClick={()=> window.open("https://www.linkedin.com/in/yazeedqasas", "_blank")}/>
      ),
      href: "/",
    },

    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" onClick={()=> window.open("https://www.instagram.com/yazeed_qasas", "_blank")} />
      ),
      href: "/",
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" onClick={()=> window.open("https://github.com/YazeedQasas", "_blank")} />
        ),
        href: "/",
      },
    {
      title: "X (Formerly Twitter)",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" onClick={()=> window.open("https://x.com/QasasYazeed", "_blank")} />
      ),
      href: "/",
    },
    {
        title: "Facebook",
        icon: (
          <FaFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" onClick={()=> window.open("https://www.facebook.com/yazeed.qasas.9", "_blank")} />
        ),
        href: "/",
      },
    
  ];
  return (
    
    <div className="flex items-center justify-center h-[30rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
