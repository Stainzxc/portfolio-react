import React from "react";
import talipaapp from "../assets/img/talipaapp.png";
import sneakers from "../assets/img/sneakers.png";
import ams from "../assets/img/ams.png";
import netflix from "../assets/img/netflix.png";
import swift from "../assets/img/swift.png";
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    id: "talipa",
    image: talipaapp,
    tag: ["React.js", " , ", "Tailwind ", " & ", "Laravel"],
    title: "Talipa App",
    description:
      "Capstone marketplace platform built to reduce middlemen between vendors and farmers for better transaction outcomes.",
    liveUrl: "https://www.talipaapp.com/",
    codeUrl: "https://github.com/saisarah/TalipaAPP-Frontend",
  },
  {
    id: "sneakers",
    image: sneakers,
    tag: ["React.js", " & ", "Tailwind"],
    title: "Sneakers",
    description:
      "Practice e-commerce UI project focused on component structure, responsive layout, and Tailwind workflow.",
    liveUrl: "https://e-commerse-sepia.vercel.app/",
    codeUrl: "https://github.com/Stainzxc/e-commerse",
  },
  {
    id: "ams",
    image: ams,
    tag: ["JavaScript", " & ", "PHP"],
    title: "AMS",
    description:
      "Alumni management thesis project that helps graduates coordinate concerns and schedule MIS appointments.",
    liveUrl:
      "http://ucc-ams.epizy.com/?i=1&fbclid=IwAR2Dw9bzt5zdBS5upT52eMliTCL3AMT5UYBgVxC0HAw7klUfjZld58dX3xI",
    codeUrl: "https://github.com/Stainzxc/AMS",
  },
  {
    id: "netflix",
    image: netflix,
    tag: ["React.js", " & ", "Tailwind"],
    title: "Netflix Clone",
    description:
      "UI clone from registration and login through dashboard screens using React and Tailwind CSS.",
    liveUrl: "https://netflixclone-blush.vercel.app/",
    codeUrl: "https://github.com/Stainzxc/netflixclone",
  },
  {
    id: "swift-soles",
    image: swift,
    tag: ["HTML", " , ", "CSS", " & ", "JavaScript"],
    title: "Swift Soles",
    description:
      "A fundamentals practice project where I built a responsive shoe-store interface using HTML, CSS, and JavaScript to strengthen my core web development skills.",
    liveUrl: "https://swift-soles.vercel.app/",
    codeUrl: "https://github.com/Stainzxc/Swift-Soles",
  },
];

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-[#0B0C10] text-[#C5C6C7] py-14"
    >
      <div className="mx-auto max-w-[1700px] p-4 md:p-8 flex flex-col justify-center w-full h-full">
        <div className="pt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Projects
          </p>
          <p className="py-2 text-sm md:text-xl">
            Scroll horizontally to explore selected work and live demos.
          </p>
        </div>

        <Fade cascade damping={0.12} triggerOnce>
          <div className="projects-scroll mt-4 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card group min-w-[320px] md:min-w-[560px] lg:min-w-[760px] snap-start rounded-xl border border-[#1F2833] bg-[#111318] shadow-md shadow-[#0f1013]"
              >
                <div className="relative overflow-hidden rounded-t-xl bg-[#DBE6E0] p-4 md:p-6">
                  <span className="absolute left-3 top-3 z-10 rounded-full bg-[#7c7e88] px-3 py-1 text-xs text-[#101217]">
                    {project.tag}
                  </span>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[180px] w-full rounded-lg object-cover object-top md:h-[280px] project-image"
                  />
                </div>
                <div className="space-y-4 p-5 md:p-7">
                  <h3 className="text-2xl font-semibold text-[#1dd877]">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#9EA3B0] md:text-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[#1dd877] px-5 py-2 text-sm font-semibold text-[#0B0C10] transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,216,119,0.45)]"
                    >
                      Live
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#66FCF1] px-5 py-2 text-sm font-semibold text-[#66FCF1] transition-all duration-300 hover:bg-[#66FCF1] hover:text-[#0B0C10]"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Fade>
        <p className="mt-2 text-xs tracking-wide text-[#6f7580] md:text-sm">
          Tip: drag sideways or shift + mouse wheel to scroll projects.
        </p>
      </div>
    </div>
  );
}
