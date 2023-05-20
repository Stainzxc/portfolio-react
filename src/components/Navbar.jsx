import React from 'react'
import logo from "../assets/img/logo-white.png"
import {FaBars} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center text-gray-500 bg-black'>
      <div className=''>
        <img src={logo} alt="logo" style={{width: '80px'}}/>
      </div>

      {/* menu */}
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Experience</li>
            <li>Counter</li>
        </ul>
      </div>

      {/*icon*/}
      <div>
        <FaBars />
      </div>
    </div>
  )
}
