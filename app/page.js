'use client'

import SideBar from "./sidebar.js"
import Projects from "./projects.js"
import Contact from "./contact.js"
import Intro from "./intro.js"
import Skills from "./skills.js"
import WorkExp from "./workex.js"
import Education from "./education.js"
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState, useEffect } from "react"

export default function Home() {
  
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sidebarRef?.current && !sidebarRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  }
  

  const bgStyle = {
    backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/portfolio/img/assets/package.jpeg') "
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <main className="flex flex-row bg-fixed" style={bgStyle} >
      <div className="fixed flex top-0 left-0 p-3 m-4 rounded-full bg-slate-400 bg-opacity-60 w-16 h-16 justify-center align-middle">
          <button onClick={handleClick}><GiHamburgerMenu size={36} /></button>
        </div>
      <div className="flex flex-row">
        <SideBar handleClick={handleClick} isOpen={isOpen} ref={sidebarRef}/>
        {isOpen  && <div className="flex md:flex-shrink-0 w-0 md:w-[300px] md:p-4 "></div> }

      
        <div className="">
          <Intro/>  
          <Projects />
          <Skills />
          <WorkExp />
          <Education />
          <Contact />
        </div>

      </div>
    </main>
  );
}
