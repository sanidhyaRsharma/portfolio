import { FaArrowLeft, FaDiscord, FaGithub, FaGraduationCap, FaHammer, FaLinkedinIn } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { FcHome, FcFolder, FcContacts, FcBriefcase} from 'react-icons/fc'
import SideBarProfile from './sideprofile.js'
import Link from 'next/link'

export default function SideBar({handleClick, isOpen}){
    console.log(isOpen)
    const leftPosition = isOpen? "left-0": "left-[-300px]";
    return (
        
        <div id='intro' className={"z-20 fixed top-0 h-screen p-4 w-[300px] flex flex-col bg-slate-800 text-white shadow-lg transition-all duration-600 ease-in-out " + leftPosition} >
            <button onClick={handleClick}><FaArrowLeft size={36} /></button>
            <SideBarProfile />
            <div>
            <SideBarContacts />
            </div>
            <Link href="#home"><SideBarItem item = {<FcHome size = "28"/>} itemName = "Home"/></Link>
            <Link href="#project"><SideBarItem item = {<FcFolder size="28"/>} itemName = "Projects"/></Link>
            <Link href="#skills"><SideBarItem item= {<FaHammer size="28" />} itemName = "Skills" /></Link>
            <Link href="#workexp"><SideBarItem item = {<FcBriefcase size="28" />} itemName= "Work Experience" /></Link>
            <Link href="#education"><SideBarItem item = {<FaGraduationCap size="28" />} itemName="Education"/></Link>
            <Link href="#contacts"> <SideBarItem item = {<FcContacts size="28"/>} itemName = "Contact"/></Link>
            
        </div>
        // </div>
    );
}

const SideBarItem = ({ item, itemName }) => (
    <div className = "sidebar-item px-2 py-4 my-1 rounded-md flex flex-row justify-center \
     bg-slate-800 hover:bg-gray-200 hover:text-black duration-200 transition-all" >
        <div className="flex-none mx-3"> {item} </div>
        <div className="flex-auto mx-3 text-lg">{itemName}</div>
    </div>
);

const SideBarContacts = () => (
    <div className='flex bg-gray-600 rounded-2xl justify-evenly'>
        <div className='rounded-full m-2 p-2'><Link href="https://www.github.com/sanidhyaRsharma"><FaGithub size={28}/></Link></div>
        <div className='rounded-full m-2 p-2'><Link href="https://www.linkedin.com/in/sanidhyarsharma"><FaLinkedinIn size={28}/></Link></div>
        <div className='rounded-full m-2 p-2'><Link href="mailto:sanidhyarsharma@gmail.com"><SiGmail size={28}/></Link></div>
        <div className='rounded-full m-2 p-2'><Link href="https://discordapp.com/users/whitewalker98/"><FaDiscord size={28}/></Link></div>


    </div>
)