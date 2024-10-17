import { TypeAnimation } from "react-type-animation";
import Image from "next/image";


export default function Intro() {
  return (
    <div id="home" className="text-center">
      <div className="flex flex-col min-h-screen justify-center items-center">
        <div className="flex justify-center my-4">
            <Image
            src = "/portfolio/img/assets/main_profile.JPG"
            className = "rounded-full border-[12px] border-gray-500"
            width = {300}
            height = {300}
            alt = "Profile picture"
            unoptimized
            ></Image>
        </div>
        <h1 className="text-6xl md:text-8xl mx-4 my-10"> Sanidhya Sharma </h1>
          <TypeAnimation 
          sequence={[
            'Fullstack Developer.',
            1000,
            'AI/ML Researcher.',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{fontSize: '2em'}}
          repeat={Infinity}
          />
      </div>
      <hr />
      <div className="shadow-md shadow-gray-500 p-8 m-4  bg-slate-600 bg-opacity-70 flex flex-col rounded-3xl ">
        
        <h1 className="text-md m-4"> 
          I am actively looking for Full Time Opportunities. I am adept at Java Spring Boot and Deep
          Learning and I am an inquisitive and quick learner. I have worked for
          a couple years at Deutsche Bank as a Senior Developer.
        </h1>

        <h1 className="text-md m-4">
          I am a big fan of Chess and Dota 2! Shoot me a message if you would like
          to play a game!
        </h1>
      </div>
    </div>
  );
}
