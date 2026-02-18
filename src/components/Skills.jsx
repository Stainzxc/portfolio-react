import React from "react";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/javascript.png";
import tailwind from "../assets/img/tailwind.png";
import react from "../assets/img/react.png";
import github from "../assets/img/github.png";
import laravel from "../assets/img/laravel.svg";
import php from "../assets/img/php.svg";
import mui from "../assets/img/materialui.svg";
import postman from "../assets/img/postman.svg";
import mysql from "../assets/img/mysql.svg";
import vite from "../assets/img/vite.svg";

const skills = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: javascript },
  { name: "PHP", image: php },
  { name: "React", image: react },
  { name: "Vite", image: vite },
  { name: "Tailwind", image: tailwind },
  { name: "MUI", image: mui },
  { name: "Laravel", image: laravel },
  { name: "Github", image: github },
  { name: "Postman", image: postman },
  { name: "MySQL", image: mysql },
];

export default function Skills() {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0B0C10] text-[#C5C6C7] py-14"
    >
      {/* Container */}
      <div className="mx-auto max-w-[1100px] flex flex-col justify-center p-4 md:p-8 w-full h-full">
        <div className="pt-2">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
            Skills
          </p>
          <p className="py-2 text-sm md:text-xl">
            I have experience with these various technologies.
          </p>
        </div>

        <div className="max-w-[1100px] w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 py-4">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="group rounded-xl border border-[#1F2833] bg-[#101217] px-3 py-5 text-center shadow-sm shadow-[#0f1116] transition-all duration-300 hover:-translate-y-1 hover:border-[#66FCF1]"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-[#171A22]">
                <img
                  src={skill.image}
                  alt={skill.name}
                  loading="lazy"
                  className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-4 text-sm font-medium tracking-wide text-[#D5D8DD] md:text-base">
                {skill.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
