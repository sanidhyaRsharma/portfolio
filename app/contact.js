import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { MdMail } from "react-icons/md";
export default function Contact() {
  return (
    <div
      id="contacts"
      className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-600 bg-opacity-70 rounded-3xl"
    >
      <div className="text-4xl m-4 flex flex-col">
        <div>Contact</div>
      </div>
      <hr></hr>
      <div className="w-10"></div>
      <div className="my-4 flex items-center">
        <MdMail size={48} className="inline mx-2" />
        <div className="flex flex-col p-4">
          <div className="text-xl">Email: </div>
          <div>
            <u>
            <a className="flex-grow" href="mailto:sanidhyrsharma@gmail.com" target="_blank" rel="noopener noreferrer">
              sanidhyarsharma@gmail.com
              <FaExternalLinkAlt className="inline mx-2"/>
            </a>
            </u>
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center">
        <FaGithub size={48} className="inline mx-2" />
        <div className="flex flex-col p-4">
          <div className="text-xl">Github: </div>
          <div>
            <u>
            <a className="flex-grow" href="https://www.github.com/sanidhyaRsharma" target="_blank">
              github.com/sanidhyaRsharma
              <FaExternalLinkAlt className="inline mx-2"/>
            </a>
            </u>
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center">
        <TfiLocationPin size={48} className="inline mx-2" />
        <div className="flex flex-col p-4">
          <div className="text-xl">Location: </div>
          <div className="flex-grow">United States</div>
        </div>
      </div>
    </div>
  );
}
