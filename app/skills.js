import { FaAndroid, FaJava, FaPython, FaReact, FaGitAlt, FaJenkins } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import { SiApachespark } from "react-icons/si";


export default function Skills() {
  const skills = [
    { id:0, icon: <FaJava/> ,name: "Java", value: 98 },
    { id:1, icon: <BiLogoSpringBoot />, name: "Spring Boot", value: 95 },
    { id:2, icon: <FaPython />, name: "Python", value: 90 },
    { id:3, icon: <FaAndroid />, name: "Android", value: 85 },
    { id:4, icon: <PiFileSql />, name: "SQL", value: 95 },
    { id:5, icon: <FaReact />, name: "React", value: 75 },
    { id:6, icon: <FaGitAlt />, name: "Git", value: 95 },
    { id:7, icon: <FaJenkins/>, name: "CI/CD", value: 85 },
    { id:8, icon: <SiApachespark/>,name: "Apache Spark", value: 80}
  ];
  const listItems = skills.map((item) => (
    <li key={item.id} className="w-full lg:w-1/3 p-5">
      <div className="relative">
        <div className="py-2 flex flex-row">
          <div className="m-1">{item.icon}</div>
          {item.name}
        </div>
        <div className="absolute top-2 right-0">{item.value}%</div>
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
