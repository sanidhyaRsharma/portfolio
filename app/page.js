'use client'

import SideBar from "./sidebar.js"
import Projects from "./projects.js"
import Contact from "./contact.js"
import Intro from "./intro.js"
import Skills from "./skills.js"
import WorkExp from "./workex.js"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"

export default function Home() {
  
  const [isOpen, setIsOpen] = useState(true);
  const bgStyle = {
    backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/portfolio/img/assets/package.jpeg') "
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex min-h-screen bg-coding-theme" style={bgStyle}>
      {isOpen && <div className="w-0 md:w-72 md:p-4 "></div>}
      <SideBar handleClick={handleClick} isOpen={isOpen}/>
      <div className="p-8 flex-1">
        <div>
          <div className="flex">
          <div className="fixed top-0 left-0 p-4 m-4"><button onClick={handleClick}><GiHamburgerMenu size={36} /></button></div>
          <Intro/>  
          </div>
          <Projects />
          <Skills />
          <WorkExp />
          <Contact />
        </div>
      </div>
    </main>
  );
}
