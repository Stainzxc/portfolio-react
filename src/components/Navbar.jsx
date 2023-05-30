import React, { useState } from "react";
import logo from "../assets/img/logo-neon.png";
import iconMenu from "../assets/img/iconMenu.svg";
import iconClose from "../assets/img/iconClose.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-[#C5C6C7] bg-[#0B0C10]">
      <div className="cursor-pointer" >
      <Link to="home" smooth={true} duration={500}>
        <img src={logo} alt="logo" style={{ width: "80px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="md:flex hidden px-8 font-[Raleway] text-lg">
        <li>
          <Link to="home" className="" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" className="" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
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
