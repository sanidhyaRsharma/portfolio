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
    <main className="flex flex-col bg-fixed" style={bgStyle} >
      {isOpen  && <div className="w-0 md:w-72 md:p-4 "></div>}
        <SideBar handleClick={handleClick} isOpen={isOpen} ref={sidebarRef}/>

        <div className="fixed flex top-0 left-0 p-3 m-4 rounded-full bg-slate-400 bg-opacity-60 w-16 h-16 justify-center align-middle">
          <button onClick={handleClick}><GiHamburgerMenu size={36} /></button>
        </div>

        {/* <div className="flex min-h-full"> */}
        <Intro/>  
        {/* </div> */}
        <Projects />
        <Skills />
        <WorkExp />
        <Education />
        <Contact />
    </main>
  );
}
