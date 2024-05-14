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
    },
    {
      id: 2,
      src: "/portfolio/img/assets/logo/vjti.jpeg",
      title: "B. Tech. in Information Technology",
      school: "Veermata Jijabai Technological Institute",
      location: "Mumbai, Maharashtra, India",
      duration: "June 2020",
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
        <div className="w-full lg:flex lg:justify-between items-center">
          <div className="my-2 text-2xl px-4 flex">{item.title} 
          <div className="px-2 my-1">
            <FaAngleDown />
          </div>
          </div>
        </div>
      }
      indicator={
        <Image
          src={item.src}
          className="rounded-2xl mx-2"
          width={100}
          height={100}
          unoptimized
        />
      }
    >
      <div className="px-4">
        <div className="flex justify-between align-middle">
          <div className="my-2 md:text-2xl">{item.duration}</div>
          <div className="my-2 md:text-2xl ">{item.school}</div>
        </div>
        <div className="italic ">{item.location}</div>
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
