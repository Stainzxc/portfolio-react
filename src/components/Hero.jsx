import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <div name="home" className="w-full h-screen bg-[#0B0C10] font-poppins">
      {/* container */}
      <div className="max-w-[1500px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white mt-4 text-xl sm:text-4xl font-bold">Hello, It's Me</p>
        <h1 className="text-4xl my-4 sm:text-6xl font-bold text-white">
          Ruel Almonia
        </h1>
        <h2 className="text-4xl sm:text-4xl font-bold text-white">
          And I'm a <span className="text-[#66FCF1]">Web Developer</span>
        </h2>
        <p className="text-[#C5C6C7] py-4 max-w-[700px] text-lg font-light">
          Web developer with a passion for building interesting and
          user-friendly web interfaces. Highly driven and committed. Have the
          eagerness to learn more, especially in web development.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 border-cyan-600 hover:bg-cyan-600 hover:border-cyan-600 flex items-center">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
