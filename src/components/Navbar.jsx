import React from 'react'
import logo from "../assets/img/logo-white.png"
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-white bg-black'>
      <div className=''>
        <img src={logo} alt="logo" style={{width: '80px'}}/>
      </div>

      {/* menu */}
        <ul className='md:flex hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Contact</li>
        </ul>

      {/*icon*/}
      <div className='md:hidden '>
        <FaBars />
      </div>

      {/*mobile view*/}
      <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Countact</li>
        </ul>

    {/*social icons*/}
        <div className='hidden'>

        </div>
    </div>
  )
}
