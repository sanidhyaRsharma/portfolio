import { FaGithub } from 'react-icons/fa';
import { TfiLocationPin } from "react-icons/tfi";
import {MdMail} from 'react-icons/md'
export default function Contact() {
    return (
        <div id="contacts" className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-600 bg-opacity-70 rounded-3xl">
            <div className="text-4xl m-4 flex flex-col">
                <div>Contact</div>
            </div>
            <hr></hr>
            <div className="w-10"></div>
            <div className='my-4'>
                <MdMail size={28} className="inline mx-2"/> sanidhyarsharma@gmail.com
            </div>
            <div className='my-4'>
                <FaGithub size = {28} className = "inline mx-2" /> <a href="github.com/sanidhyaRsharma"> github.com/sanidhyaRsharma</a>
            </div>
            <div className='my-4'>
                < TfiLocationPin size = {28} className="inline mx-2"/> Fort Wayne, Indiana
            </div>
        </div>
    );
}