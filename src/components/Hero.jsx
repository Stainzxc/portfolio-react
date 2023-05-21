import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi"

export default function Hero() {
  return (
    <div name="home" className="w-full h-screen bg-[#0B0C10]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#66FCF1] text-2xl sm:text-4xl">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Ruel Almonia</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#45A29E]">I'm a Front-End Developer</h2>
        <p className="text-[#C5C6C7] py-4 max-w-[700px]">
          Front-end developer with a passion for building interesting and
          user-friendly web interfaces. Highly driven and committed. Have the
          eagerness to learn more, especially in web development.
        </p>
        <div>
            <button className="text-white group border-2 px-6 py-3 my-2 hover:border-[#66FCF1] flex items-center" >View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            </button>
        </div>
      </div>
    </div>
  );
}
