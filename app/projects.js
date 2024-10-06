import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Projects() {
  const rootPath = "/portfolio/img/assets";
  const projectItems = [
    {
      id: 0,
      title: "PFW Chatbot",
      link: "https://github.com/StaticOwl/PFW_ChatBot",
      desc: "A chatbot with React and Flask for the CS Department using Retrieval Augmented Generation with Facebook AI Similarity Search (FAISS) and Google PaLM 2",
      imgs: [
        rootPath + "/pfw-chatbot/login.png",
        rootPath + "/pfw-chatbot/register.png",
        rootPath + "/pfw-chatbot/home.png",
        rootPath + "/pfw-chatbot/chat1.png",
        rootPath + "/pfw-chatbot/chat2.png",
        rootPath + "/pfw-chatbot/chat3.png",
      ],
    },
    {
      id: 1,
      title: "WhatsApp Clone",
      link: "https://github.com/sanidhyaRsharma/whatsapp-clone",
      desc: "A clone of WhatsApp with Next.js, Convex, Clerk, React.js, TypeScript, TailwindCSS",
      imgs: [
        rootPath + "/whatsapp-clone/image1.png",
        rootPath + "/whatsapp-clone/image2.png",
        rootPath + "/whatsapp-clone/image3.png",
      ],
    },
    {
      id: 2,
      title: "Car Rental App",
      link: "https://github.com/sanidhyaRsharma/carrental",
      desc: "A car rental web application built using React.js, Django and SQLite",
      imgs: [
        rootPath + "/carrental/login.png",
        rootPath + "/carrental/home.png",
        rootPath + "/carrental/datepicker.png",
        rootPath + "/carrental/timepicker.png",
        rootPath + "/carrental/carselector.png",
      ]
    },
    {
      id: 2,
      title: "Enthusia App",
      link: "https://github.com/sanidhyaRsharma/Enthusia-2017-Android-App",
      desc: "Developed live scoring, fixtures, and points for all sports in the Android application",
      imgs: [
        rootPath + "/enthusia/splashscreen.png",
        rootPath + "/enthusia/home.png",
        rootPath + "/enthusia/hometileopen.png",
        rootPath + "/enthusia/aboutus.png",
        rootPath + "/enthusia/fixtures.jpg",
        rootPath + "/enthusia/scoreboard.jpg",
        rootPath + "/enthusia/scorecard.jpg",
        rootPath + "/enthusia/depheads.png",
      ],
    },
    {
      id: 3,
      title: "Pothole Challenge",
      link: "https://github.com/sanidhyaRsharma/SIH2020submission",
      desc: "A solution to locate potholes via AR gamification on Android for a municipal government.",
      imgs: [
        rootPath + "/pothole/map_1.jpg",
        rootPath + "/pothole/ar_1.jpg",
        rootPath + "/pothole/ar_2.jpg",
      ],
    },
    {
      id: 4,
      title: "CPUStats",
      link: "https://github.com/sanidhyaRsharma/CPUStats",
      desc: "A simple Android application to display CPU stats onto the screen as an overlay.",
      imgs: [
        rootPath + "/cpustats/home.jpeg",
        rootPath + "/cpustats/overlay.jpeg",
      ],
    },
  ];
  const listItems = projectItems.map((item) => (
    <li key={item.id} className="w-full ">
      <ProjectItem
        title={item.title}
        link={item.link}
        desc={item.desc}
        imgs={item.imgs}
      />
    </li>
  ));

  return (
    <div
      id="project"
      className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-600 bg-opacity-70 flex flex-col rounded-3xl "
    >
      <div className="text-4xl text-white p-4"> Projects </div>
      <hr />
      <div className="">
        <ul className="flex flex-row flex-wrap m-2">{listItems}</ul>
      </div>
    </div>
  );
}
const ProjectImageList = ({ imgs }) => (
  <div className="flex flex-row">
    <Carousel autoPlay={true} interval={3000} infiniteLoop showThumbs={false} >
    {imgs.map((img, i) => (
      <div key={i} className="max-h-96">
        <Image src={img} width={100} height={100} className="leading-4 max-h-96 object-contain" unoptimized />
      </div>
    ))}
    </Carousel>
  </div>
);

const ProjectItem = ({ title, link, desc, imgs }) => (
  <div className="bg-gray-600 border border-gray-400 m-4 shadow-white shadow-sm
  flex md:flex-row flex-col justify-between">
    <div className="flex flex-col md:w-2/6 bg-gray-500">
      <div className="text-2xl p-1 px-2 bg-gray-950 bg-opacity-60 text-center ">
        <a href={link} className="p-2">
          <div className="flex items-center justify-center">
            <FaGithub className="flex mr-3" size={32}></FaGithub>
            {title}
          </div>
        </a>
      </div>

      <div className="h-0.5 mx-auto bg-slate-50" />
      <div className="p-4 text-center">{desc}</div>
    </div>
    <div className="flex md:w-4/6 justify-center items-center p-4">
      <div className="flex bg-gray-600 justify-center">
        <ProjectImageList imgs={imgs}/>
      </div>
    </div>
  </div>
);
