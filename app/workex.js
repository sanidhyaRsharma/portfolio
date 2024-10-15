"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
export default function WorkExp() {
  const workexList = [
    {
      id: 1,
      src: "/portfolio/img/assets/logo/pfw.jpg",
      title: "Graduate Research Assistant",
      company: "Purdue University",
      location: "Fort Wayne, Indiana",
      duration: "July 2023 - Present",
      description: [
        "Researching adversarial attacks on machine learning & deep learning Network Intrusion Detection Systems.",
        "Implemented Projected Gradient Descent and BPDA to detect weaknesses in modern Intrusion Detection Systems.",
      ],
      skills: [
        "Python",
        "TensorFlow",
        "Deep Learning",
        "Machine Learning",
        "Jupyter Lab",
        "Git",
      ],
    },
    {
      id: 2,
      src: "/portfolio/img/assets/logo/dblogo.png",
      title: "Senior Software Engineer",
      company: "Deutsche Bank",
      location: "Pune, Maharashtra, India",
      duration: "August 2020 - June 2022",
      description: [
        "Developed an Almanac service in Spring Boot and MongoDB to handle selection & extraction of big data from source systems in case of SLA breaches. Reduced manual search effort for replacement by 90%.",
        "Conceived and deployed archetypes with Spring which serve as a standard for consumer onboarding to the shared data services. All 12 teams in the RFT department utilize these archetypes, reducing delivery times by 70%.",
        "Improved correction management services which source data, merge corrections and publish the result. Integrated Almanac Service leading to reduction of response time by 75%.",
        "Optimized performance of Spark jobs by rewriting transformation logic, reducing run time from 12 hours to 3 hours.",
        "Created a Jenkins pipeline and automated deployments for services to migrate them from TeamCity builds.",
        "Pioneered a new business analysis process to use Python(pandas) over Excel to communicate transformation logic.",
      ],
      skills: [
        "Java",
        "Spring Boot",
        "SQL",
        "Spark",
        "HDFS",
        "Hive",
        "Linux",
        "JUnit",
        "Mockito",
        "Jenkins",
        "TeamCity",
        "SonarQube",
        "Veracode",
        "CI/CD",
        "Bitbucket",
        "JIRA",
        "SCRUM",
        "Agile",

      ],
    },
    {
      id: 3,
      src: "/portfolio/img/assets/logo/barclays.png",
      title: "Analyst Intern",
      company: "Barclays",
      location: "Pune, Maharashtra, India",
      duration: "May 2019 - August 2019",
      description: [
        "Automated process to extract business critical information from PDFs with OCR reducing human effort by 80%.",
        "Achieved 97% accuracy by using Google’s Tesseract, beating the previous benchmark of 56%.",
      ],
      skills: [
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
        "BootStrap",
        "OCR",
        "Google Tesseract",
      ],
    },
    {
      id: 4,
      src: "/portfolio/img/assets/logo/cybertech.jpg",
      title: "Software Developer Intern",
      company: "CyberTech Systems & Software",
      location: "Thane, Maharashtra, India",
      duration: "May 2018 - July 2018",
      description: [
        "Enhanced performance of the H.R. portal by redesigning views with pagination and lazy loading leading to significantly smaller response time",
        "Improved the UI and added backend functionality for the Skill Assessment Web Application.",
      ],
      skills: [
        "ASP .NET 4.0",
        "C#",
        "Angular",
        "HTML5",
        "CSS3",
        "JavaScript",
        "BootStrap",
      ],
    },
  ];

  const listItems = workexList.map((item) => (
    // <li key={item.id} className="w-full group">
    <AccordionItem
      key={item.id}
      className="m-2 bg-gray-900 rounded-2xl p-4"
      // style={{ "&focus": { outline: "0" } }}
      aria-label={item.title}
      title={
        <div className="px-4">
          <div className="w-full flex-col-reverse flex md:flex-row md:justify-between items-center">
            <div className="flex flex-grow">
              <div>
                <div className="text-3xl px-4">{item.title}</div>
              </div>

              <div className="px-2 my-1">
                <FaAngleDown />
              </div>
            </div>
          </div>
          <div className="px-4 flex flex-wrap">
            {item.skills.map((e, i) => (
              <div key = {i} className="px-4 border mx-1 my-1 rounded-md bg-cyan-900 ">
                {e}
              </div>
            ))}
          </div>
        </div>
      }
      indicator={<>
      <div className="my-2 px-4 ">
              <Image
                src={item.src}
                className="rounded-2xl mx-2"
                width={100}
                height={100}
                alt = {item.src.substring(item.src.lastIndexOf('/') + 1)}
                unoptimized
              />
            </div></>}
    >
      <div className="px-4">
        <div className="md:flex md:justify-between">
          <div className="my-2 md:text-2xl">{item.duration}</div>
          <div className="my-2 md:text-2xl ">{item.company}</div>
        </div>
        <div className="italic ">{item.location}</div>
        <ul className="my-2 list-disc">
          {item.description.map((d, index) => (
            <li key={index} className="list-disc list-inside">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </AccordionItem>
  ));

  return (
    <div
      id="workexp"
      className="shadow-md shadow-gray-500 p-8 m-4 bg-slate-600 bg-opacity-70 rounded-3xl">
      <div className="text-4xl text-white p-4"> Experience </div>
      <hr />
      <Accordion
        selectionMode="multiple"
        variant="splitted"
      >
        {listItems}
      </Accordion>
    </div>
  );
}
