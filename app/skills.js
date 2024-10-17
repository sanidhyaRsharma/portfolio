import { FaAndroid, FaJava, FaPython, FaReact, FaGitAlt, FaJenkins } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { SiApachespark, SiTypescript } from "react-icons/si";


export default function Skills() {
  const skills = [
    { id:0, icon: <FaJava size={32}/> ,name: "Java", value: 98 },
    { id:1, icon: <BiLogoSpringBoot size={32}/>, name: "Spring Boot", value: 95 },
    { id:2, icon: <FaPython size={32}/>, name: "Python", value: 95 },
    { id:3, icon: <SiTypescript size={32}/>, name: "Typescript", value: 90 },
    { id:4, icon: <FaReact size={32}/>, name: "React", value: 85 },
    { id:5, icon: <PiFileSql size={32}/>, name: "SQL", value: 95 },
    { id:6, icon: <SiApachespark size={32}/>,name: "Apache Spark", value: 85},
    { id:7, icon: <FaGitAlt size={32}/>, name: "Git", value: 95 },
    { id:8, icon: <FaJenkins size={32}/>, name: "CI/CD", value: 85 },
  ];
  const listItems = skills.map((item) => (
    <li key={item.id} className="w-full lg:w-1/3 p-5">
      <div className="relative">
        <div className="py-2 flex items-center">
          <div className="m-1">{item.icon}</div>
          <div className="m-1">
          {item.name}
          </div>
        </div>
        <div className="absolute top-5 right-0">{item.value}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-900">
        <div
          className="bg-white h-2.5 rounded-full"
          style={{ width: item.value + "%" }}
        ></div>
      </div>
    </li>
  ));

  return (
    <div id="skills" className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-500 bg-opacity-50 flex flex-col rounded-3xl">
      <div className="text-4xl text-white p-4"> Skills </div>
      <hr />
      <div className="">
        <ul className="p-2 m-2 flex flex-wrap">{listItems}</ul>
      </div>
    </div>
  );
}
