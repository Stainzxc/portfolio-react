import React from "react";
import profile from "../assets/img/profile.jpg";
import resumeFile from "../assets/resume-almonia.pdf";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFacebook, AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      name="home"
      className="w-full min-h-screen bg-[#0B0C10] text-[#C5C6C7] font-poppins pt-[90px]"
    >
      <div name="about" className="relative -top-[90px]" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-12 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="space-y-5">
          <p className="text-[#1dd877] text-sm md:text-xl font-semibold tracking-wide">
            FULL STACK DEVELOPER
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F4F5F7] leading-[1.08]">
            Hello, my
            <br />
            name is
            <br />
            Ruel Almonia
          </h1>
          <p className="text-[#9EA3B0] text-lg md:text-2xl max-w-[620px] leading-relaxed">
            A Web developer with passion for design, automation, and
            modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer rounded-full bg-[#1dd877] px-7 py-3 text-[#0B0C10] font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,216,119,0.4)] inline-flex items-center gap-2"
            >
              Contact Me
              <HiArrowNarrowRight size={18} />
            </Link>

            <a
              href={resumeFile}
              download="resume-almonia.pdf"
              className="rounded-full bg-[#1A1D23] border border-[#2B303A] px-7 py-3 text-[#D5D8DD] font-semibold transition-all duration-300 hover:border-[#66FCF1] hover:text-[#66FCF1] inline-flex items-center gap-2"
            >
              Download Resume
              <AiOutlineDownload size={18} />
            </a>
          </div>

          <div className="flex items-center gap-6 pt-4 text-[#D5D8DD]">
            <a
              href="https://www.linkedin.com/in/ruel-almonia-681941243/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#66FCF1] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Stainzxc"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#66FCF1] transition-colors duration-300"
              aria-label="Github"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.facebook.com/qweqwzxc01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#66FCF1] transition-colors duration-300"
              aria-label="Facebook"
            >
              <AiFillFacebook size={30} />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute h-[360px] w-[270px] sm:h-[430px] sm:w-[320px] border-4 border-[#1dd877] rounded-[55%_45%_60%_40%/45%_55%_45%_55%] rotate-6 animate-pulse" />
          <img
            src={profile}
            alt="Ruel Almonia"
            className="relative h-[360px] w-[270px] sm:h-[430px] sm:w-[320px] object-cover rounded-[48%_52%_42%_58%/54%_46%_54%_46%] shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
