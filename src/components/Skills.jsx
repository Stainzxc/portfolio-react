import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import tailwind from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import github from "../assets/img/github.png";
import { Slide  } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0B0C10] text-[#C5C6C7]">
      {/* Container */}
      <div className=" mx-auto max-w-[1000px] flex flex-col justify-center p-4 w-full h-full">
        <div className="pt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Skills
          </p>
          <p className="py-2 text-sm md:text-xl">
            I have experience with these various technologies.
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-2">
          {/* <Slide duration={1000} delay={500}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={html} alt="html" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          {/* </Slide>
          <Slide duration={500} delay={400}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={css} alt="css" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          {/* </Slide>
          <Slide sm:duration={100} delay={300}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={javascript} alt="javascript" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          {/* </Slide>
          <Slide duration={1000} delay={500}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={tailwind} alt="tailwind" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
          {/* </Slide>
          <Slide duration={500} delay={400}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={react} alt="react" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          {/* </Slide>
          <Slide sm:duration={100} delay={300}> */}
          <div className="shadow-md shadow-[#66FCF1] hover:scale-110 duration-500">
            <img src={github} alt="github" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
          {/* </Slide> */}
        </div>
      </div>
    </div>
  );
}
