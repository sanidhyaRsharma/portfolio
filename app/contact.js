import { FaGithub } from "react-icons/fa";
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
            <a className="flex-grow" href="mailto:sanidhyrsharma@gmail.com">
              sanidhyarsharma@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center">
        <FaGithub size={48} className="inline mx-2" />
        <div className="flex flex-col p-4">
          <div className="text-xl">Github: </div>
          <div>
            <a className="flex-grow" href="github.com/sanidhyaRsharma">
              github.com/sanidhyaRsharma
            </a>
          </div>
        </div>
      </div>
      <div className="my-4 flex items-center">
        <TfiLocationPin size={48} className="inline mx-2" />
        <div className="flex flex-col p-4">
          <div className="text-xl">Location: </div>
          <div className="flex-grow">Fort Wayne, Indiana</div>
        </div>
      </div>
    </div>
  );
}
