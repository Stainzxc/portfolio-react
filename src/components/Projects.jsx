import React from "react";
import talipaapp from "../assets/img/talipaapp.png";
import sneakers from "../assets/img/sneakers.png";
import ams from "../assets/img/ams.png";
import { Slide  } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0B0C10] text-[#C5C6C7]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Projects
          </p>
          <p className="py-4 text-xl">
            This is some projects that I involved as a Frontend developer and
            the other project like Sneaker is my practice project.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <Slide duration={1000} delay={300}>
          <div
            style={{ backgroundImage: `url(${talipaapp})` }}
            className="shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://www.talipaapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/saisarah/TalipaAPP-Frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Slide>
          {/* Grid Item */}
          <Slide duration={500} delay={200}>
          <div
            style={{ backgroundImage: `url(${sneakers})` }}
            className="shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wide">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://e-commerse-sepia.vercel.app/ " target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stainzxc/e-commerse"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Slide>
          {/* Grid Item */}
          <Slide duration={100} delay={100}>
          <div
            style={{ backgroundImage: `url(${ams})` }}
            className="shadow-lg shadow-[#0a192f] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href=" http://ucc-ams.epizy.com/?i=1&fbclid=IwAR2Dw9bzt5zdBS5upT52eMliTCL3AMT5UYBgVxC0HAw7klUfjZld58dX3xI"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Stainzxc/AMS" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
