import React, { useState } from "react";
import logo from "../assets/logoNZ.jpg";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" py-1">
      <div className="flex items-center justify-between mx-8 md:mx-20">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-16 md:w-20 mx-2 border" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-2xl">
          <ScrollLink
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            About Me
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </ScrollLink>
          <ScrollLink
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Technologies
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Projects
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Experience
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </ScrollLink>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-brightColor"
          >
            Get in Touch
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </ScrollLink>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-700 text-2xl">
          <ScrollLink
            to="aboutMe"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Technologies
          </ScrollLink>
          <ScrollLink
            to="experience"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="block py-2 px-4 hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Get in Touch
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
