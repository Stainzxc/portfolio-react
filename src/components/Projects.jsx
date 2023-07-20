import React from "react";
import talipaapp from "../assets/img/talipaapp.png";
import sneakers from "../assets/img/sneakers.png";
import ams from "../assets/img/ams.png";
import netflix from "../assets/img/netflix.png";
import { Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full h-screen bg-[#0B0C10] text-[#C5C6C7]"
    >
      <div className="mx-auto max-w-[1700px] p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Projects
          </p>
          <p className="py-2 text-sm md:text-xl">
            This is some projects that I involved as a Frontend developer and
            the other project like Sneaker is my practice project.
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
          {/* Grid Item */}
          {/* <Slide duration={1000} delay={300}> */}
          <div
            style={{ backgroundImage: `url(${talipaapp})` }}
            className=" group container rounded-md flex justify-center items-center mx-auto content-div shadow-md shadow-[#66FCF1] hover:scale-90 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="md:text-lg text-sm text-white tracking-wider">
                This is our Capstone Project or Thesis. In this project are aim
                is to remove the middlemen between the Vendor and Farmer in
                their transaction therefore the farmer can earn more.
              </span>
              <div className="pt-8 text-center">
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2">
                  ReactJS
                </span>
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-10 md:mr-20">
                  Tailwind
                </span>
                <a href="https://www.talipaapp.com/" target="_blank">
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2 mr-2">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/saisarah/TalipaAPP-Frontend"
                  target="_blank"
                >
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2 mr-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* </Slide> */}
          {/* Grid Item */}
          {/* <Slide duration={500} delay={200}> */}

          <div
            style={{ backgroundImage: `url(${sneakers})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-md shadow-[#66FCF1] hover:scale-90 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 w-full mx-2 ">
              <span className="md:text-lg text-sm text-white">
                I made this because I am practicing my knowledge in React JS and
                Tailwind CSS. This is not functionable e-commerse website.{" "}
              </span>
              <div className="pt-8 text-center">
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2">
                  ReactJS
                </span>
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-10 md:mr-20">
                  Tailwind
                </span>
                <a href="https://e-commerse-sepia.vercel.app/ " target="_blank">
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2 mr-2">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stainzxc/e-commerse"
                  target="_blank"
                >
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* </Slide> */}
          {/* Grid Item */}
          {/* <Slide duration={100} delay={100}> */}
          <div
            style={{ backgroundImage: `url(${ams})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-md shadow-[#66FCF1] hover:scale-90 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="md:text-lg text-sm text-white">
                This one is our Thesis when we are third year college. We made
                this to help the alumnus about their concerns therefore they can
                make apppointment to the MIS.{" "}
              </span>
              <div className="pt-8 text-center">
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2">
                  HTML
                </span>
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2">
                  CSS
                </span>
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2 md:mr-20">
                  JavaScript
                </span>
                <a
                  href=" http://ucc-ams.epizy.com/?i=1&fbclid=IwAR2Dw9bzt5zdBS5upT52eMliTCL3AMT5UYBgVxC0HAw7klUfjZld58dX3xI"
                  target="_blank"
                >
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2 mr-2">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Stainzxc/AMS" target="_blank">
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${netflix})` }}
            className="group container rounded-md flex justify-center items-center mx-auto content-div shadow-md shadow-[#66FCF1] hover:scale-90 duration-500"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mx-2">
              <span className="md:text-lg text-sm text-white">
                This one is I try to clone the User Inteface of Netflix from Registration and Login to Dashboard using Tailwind CSS and React JS.{" "}
              </span>
              <div className="pt-8 text-center">
                
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2">
                 Tailwind CSS
                </span>
                <span className="md:text-lg text-sm font-bold tracking-wide bg-[#66FCF1] text-black rounded-md p-2 mr-2 md:mr-20">
                  React JS
                </span>
                <a
                  href="https://netflixclone-blush.vercel.app/"
                  target="_blank"
                >
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2 mr-2">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Stainzxc/netflixclone" target="_blank">
                  <button className="md:text-lg text-sm font-bold tracking-wide bg-white text-gray-700 rounded-md p-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* </Slide> */}
        </div>
      </div>
    </div>
  );
}
