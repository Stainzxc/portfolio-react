import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import tailwind from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import github from "../assets/img/github.png";

export default function Skills() {
  return (
    <div name='skills' className="w-full h-screen bg-[#0B0C10] text-[#C5C6C7]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center p-4 w-full h-full">
        <div className=" grid grid-cols-2 gap-8">
        <div className="sm:text-right ">
          <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Skills
          </p>
          </div>
          </div>
          <div></div>
          <p className="py-4 text-2xl flex justify-center mx-auto">
            I have experience with these various technologies.
          </p>
        

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={html} alt="html" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={css} alt="css" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={javascript} alt="javascript" className="w-20 mx-auto" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={tailwind} alt="tailwind" className="w-20 mx-auto" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={react} alt="react" className="w-20 mx-auto" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
            <img src={github} alt="github" className="w-20 mx-auto" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
}
