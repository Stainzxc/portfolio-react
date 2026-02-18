import React, { useEffect, useState } from "react";
import iconMenu from "../assets/img/iconMenu.svg";
import iconClose from "../assets/img/iconClose.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  useEffect(() => {
    const updateSocialVisibility = () => {
      const skillsSection = document.querySelector("[name='skills']");
      if (!skillsSection) {
        setShowSocialIcons(false);
        return;
      }

      const skillsTop =
        skillsSection.getBoundingClientRect().top + window.scrollY;
      setShowSocialIcons(window.scrollY + 120 >= skillsTop);
    };

    updateSocialVisibility();
    window.addEventListener("scroll", updateSocialVisibility, {
      passive: true,
    });
    window.addEventListener("resize", updateSocialVisibility);

    return () => {
      window.removeEventListener("scroll", updateSocialVisibility);
      window.removeEventListener("resize", updateSocialVisibility);
    };
  }, []);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-[#C5C6C7] bg-[#0B0C10]">
      <div className="cursor-pointer">
        <Link to="home" smooth={true} duration={500}>
          <h1 className="font-poppins font-bold text-2xl px-8 text-[#66FCF1]">Ruel Almonia.</h1>
        </Link>
      </div>

      {/* menu */}
      <ul className="md:flex hidden px-8 font-poppins font-semibold text-lg ">
        <li>
          <Link
            to="home"
            className="hover:text-[#66FCF1] border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            className="hover:text-[#66FCF1] border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            className="hover:text-[#66FCF1] border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            className="hover:text-[#66FCF1] border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/*icon*/}

      <div onClick={handleClick} className="md:hidden z-10 mr-2">
        {!nav ? (
          <img
            src={iconMenu}
            alt="iconmenu"
            className="h-[25px] cursor-pointer"
          />
        ) : (
          <img
            src={iconClose}
            alt="iconclose"
            className="h-[25px] cursor-pointer"
          />
        )}
        {/* <img src={iconMenu} alt="iconmenu" /> */}
      </div>

      {/*mobile view*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0B0C10] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            className="border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            className="border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            className="border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-90}
            className="border-b-2 border-transparent pb-1"
            activeClass="text-[#66FCF1] border-[#66FCF1]"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/*social icons*/}
      <div
        className={`${
          showSocialIcons ? "hidden lg:flex" : "hidden"
        } fixed flex-col top-[35%] left-0`}
      >
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              href="https://www.linkedin.com/in/ruel-almonia-681941243/"
              className="flex justify-between items-center w-full text-[#C5C6C7] font-bold"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              href="https://github.com/Stainzxc"
              className="flex justify-between items-center w-full text-[#C5C6C7] font-bold"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ">
            <a
              href="https://www.facebook.com/qweqwzxc01"
              className="flex justify-between items-center w-full text-[#C5C6C7] font-bold"
              target="_blank"
            >
              Facebook <AiFillFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
