"use client";

import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

export default function Education() {
  const educationList = [
    {
      id: 1,
      src: "/portfolio/img/assets/logo/pfw.jpg",
      title: "M.S. in Computer Science",
      school: "Purdue University",
      location: "Fort Wayne, Indiana",
      duration: "Aug 2024",
      courses: [
        "Thesis: Adversarial Attacks Against Network Intrusion Detection Systems",
        "Natural Language Processing",
        "Applications of Deep Learning",
        "Cryptography & Network Security",
        "Algorithm Analysis and Design",
        "Heuristics",
        "Software Engineering",
        "Database Design",
      ],
    },
    {
      id: 2,
      src: "/portfolio/img/assets/logo/vjti.jpeg",
      title: "B. Tech. in Information Technology",
      school: "Veermata Jijabai Technological Institute",
      location: "Mumbai, Maharashtra, India",
      duration: "June 2020",
      courses: [
        "Software Analysis and Design",
        "Blockchain Technology",
        "Web Technology",
        "Program Development : Java",
        "Fundamentals of Data Structures",
        "Computer Programming & Problem Solving : C++",
        "Computer Organization & Architecture",
        "Operating Systems : C",
        "Computer Networks",
        "Wireless Networks",
        "Service Oriented Architecture",
        "Big Data Analytics",
      ],
    },
  ];
  const listItems = educationList.map((item) => (
    // <li key={item.id} className="w-full group">
    <AccordionItem
      key={item.id}
      className="m-2 bg-gray-900 rounded-2xl p-4"
      style={{ "&focus": { outline: "0" } }}
      aria-label={item.title}
      title={
        <div className="w-full flex-col-reverse flex md:flex-row md:justify-between items-center">
          <div className="my-2 text-2xl px-4 flex flex-grow">
            {item.title}
            <div className="px-2 my-1">
              <FaAngleDown />
            </div>
            
          </div>
          <div className="my-2 px-4 ">
              <Image
                src={item.src}
                className="rounded-2xl mx-2"
                width={100}
                height={100}
                unoptimized
              />
            </div>
        </div>
      }
      indicator={<></>}
    >
      <div className="px-4">
        <div className="md:flex md:justify-between align-middle">
          <div className="my-2 md:text-2xl">{item.duration}</div>
          <div className="my-2 md:text-2xl ">{item.school}</div>
        </div>
        <div className="italic my-2">{item.location}</div>
        <div className="">
            {/* <p className="text-xl ">Relevant coursework: </p>  */}
                <div className="flex flex-wrap">
                {item.courses.map((e) => (
                    <div className="p-1 border mx-2 my-2 rounded-md bg-cyan-900">{e}</div>
                ))}
                </div>
                
        
        </div>
      </div>
    </AccordionItem>
  ));
  return (
    <div
      id="education"
      className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-600 bg-opacity-70 flex flex-col rounded-3xl"
    >
      <div className="text-4xl text-white p-4"> Education </div>
      <Accordion
        selectionMode="multiple"
        className="p-0 m-0"
        variant="splitted"
      >
        {listItems}
      </Accordion>
    </div>
  );
}
