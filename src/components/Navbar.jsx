import React, { useState } from "react";
import logo from "../assets/img/logo-neon.png";
import iconMenu from "../assets/img/iconMenu.svg";
import iconClose from "../assets/img/iconClose.svg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center text-[#C5C6C7] bg-[#0B0C10]">
      <div className="">
        <img src={logo} alt="logo" style={{ width: "80px" }} />
      </div>

      {/* menu */}
      <ul className="md:flex hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Countact</li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a href="/" className="flex justify-between items-center w-full text-[#C5C6C7]" >
              LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a href="/" className="flex justify-between items-center w-full text-[#C5C6C7]" >
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ">
            <a href="/" className="flex justify-between items-center w-full text-[#C5C6C7]" >
              Facebook <AiFillFacebook size={30}/>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 ">
            <a href="/" className="flex justify-between items-center w-full text-[#C5C6C7]" >
              Gmail <CgMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
