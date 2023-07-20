import React from "react";
import profile from "../assets/img/profile.jpg";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0B0C10] text-[#C5C6C7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right py-2 pl-4">
            <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#66FCF1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[800px] mx-auto w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold py-4 flex">
            <img
              src={profile}
              alt="profile-picture"
              className="rounded-md w-[300px] mx-auto md:w-full text-right shadow-md shadow-[#66FCF1]"
            />
          </div>
          <div>
            <p className="text-sm md:text-xl mx-10 md:mx-auto">
              I am a passionate and dedicated web developer with a strong focus
              on creating user-friendly and visually appealing web experiences.
              I thrive in collaborative environments and enjoy working closely
              with designers and back-end developers to bring ideas to life.
              With a keen eye for detail and a deep understanding of HTML, CSS,
              and JavaScript, I aim to build responsive and accessible websites
              that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
