import { FaGithub } from "react-icons/fa";
export default function Projects() {
  const projectItems = [
    {
      id: 0,
      title: "PFW Chatbot",
      link: "https://github.com/StaticOwl/PFW_ChatBot",
      desc: "A chatbot with React and Flask for the CS Department using Retrieval Augmented Generation with Facebook AI Similarity Search (FAISS) and Google PaLM 2",
    },
    {
      id: 1,
      title: "Enthusia App",
      link: "https://github.com/sanidhyaRsharma/Enthusia-2017-Android-App",
      desc: "Developed live scoring, fixtures, and points for all sports in the Android application",
    },
    {
      id: 2,
      title: "Pothole Challenge",
      link: "https://github.com/sanidhyaRsharma/SIH2020submission",
      desc: "A solution to locate potholes via AR gamification on Android for a municipal government.",
    },
  ];
  const listItems = projectItems.map((item) => (
    <li key={item.id} className="w-full lg:w-1/2 xl:w-1/3 ">
      <ProjectItem title={item.title} link={item.link} desc={item.desc} />
    </li>
  ));
  // const projectItems = [<ProjectItem title = {'PFW Chatbot'}
  //                             link = {'https://github.com/StaticOwl/PFW_ChatBot'}
  //                             desc = {''}/>,
  //                 <ProjectItem title = {''}
  //                         link = {''}
  //                         desc = {''}/>,
  //                 <ProjectItem title = {'Enthusia App'}
  //                         link = {''}
  //                         desc = {''}/>
  //                     ];

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

const ProjectItem = ({ title, link, desc }) => (
  <div className="border border-gray-400 m-4 align-center shadow-white shadow-sm">
    <div className="text-xl p-2 bg-gray-950 bg-opacity-20 text-center  ">
      <a href={link} className="p-2">
        <div className="relative">
          {title}
          <div className="absolute right-0 top-0 px-2 invisible lg:visible">
            <FaGithub size={28}></FaGithub>
          </div>
        </div>
      </a>
    </div>

    <div className="h-0.5 mx-auto bg-slate-50" />
    <div className="text-sm p-4 bg-gray-600">{desc}</div>
  </div>
);
