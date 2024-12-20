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
        "Onboarded clients on to Shared Data Services by setting up ETL processes for regulatory reporting.",
        "Reduced manual search efforts by 15\% by developing an Almanac microservice in Spring Boot (Java) and MongoDB, enabling selection and extraction of large datasets from source systems during breaches.",
        "Cut delivery times by 20\% via standard Spring Boot (Java) archetypes for consumer onboarding to shared data services. All 12 teams in the RFT department utilize these archetypes.",
        "Improved correction management services which source data, merge corrections and publish the result. Integrated Almanac Service leading to reduction of response time by 75%.",
        "Decreased response time by 10\% by developing correction management service.",
        "Built Jenkins pipelines and integrated with Bitbucket, to automate deployments, testing and sanity checks.",
        "Improved clarity and accuracy of business analyses by pioneering a new process using Python (pandas) for communicating transformation logic, leading to more precise interpretation.",
        "Spearheaded SCRUM, including sprint planning, story-pointing, and retrospectives, improving project efficiency and collaboration through JIRA.",
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
        "Reduced human effort by 80% by automating the information extraction from PDF statements using OCR technology.",
        "Enhanced data extraction accuracy from 56% to 97% by using Google’s Tesseract OCR to parse diverse document formats.",
        "Developed a web application using Flask, HTML, CSS & Bootstrap to streamline the parsing process.",
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
      className="m-2 bg-gray-900 rounded-2xl p-4 hover:bg-gray-800"
      // style={{ "&focus": { outline: "0" } }}
      aria-label={item.title}
      title={
        <div className="px-4">
          <div className="w-full flex-col-reverse flex md:flex-row md:justify-between items-center">
            <div className="flex flex-grow my-2">
              <div>
                <div className="text-3xl px-4 my-2">{item.title}</div>
              </div>

            </div>
            <div className="my-2 px-4 ">
              <Image
                src={item.src}
                className="rounded-2xl mx-2"
                width={100}
                height={100}
                alt = {item.src.substring(item.src.lastIndexOf('/') + 1)}
                unoptimized
              />
            </div>
          </div>
          <div className="px-4 flex flex-wrap justify-center">
            {item.skills.map((e, i) => (
              <div key = {i} className="px-4 border mx-1 my-1 rounded-md bg-cyan-900 ">
                {e}
              </div>
            ))}
          </div>
        </div>
      }
     indicator={<></>}
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
