import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavBarLinks = [
    { id: 1, name: "HOME", link: "#home" },
    { id: 2, name: "ABOUT", link: "#about" },
    { id: 3, name: "SKILLS", link: "#skills" },
    { id: 4, name: "PROJECTS", link: "#projects" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-bg-dark/60 backdrop-blur-md shadow-lg"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      {/* <div className="container mx-auto flex items-center justify-between px-5 py-4"> */}
      {/* Logo */}
      {/* <a
          href="#home"
          className="text-3xl lg:text-4xl font-bold italic text-white"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-pink-400 to-blue-500 text-5xl">
            P
          </span>
          ortfolio
        </a> */}

      <div className="container mx-auto lg:px-12 flex items-center justify-between py-6 px-6 md:px-12">
        <a
          href="#home"
          className="text-xl lg:text-2xl font-bold italic text-white whitespace-nowrap"
        >
          PORTFOLIO .
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="w-8 h-8" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center lg:space-x-8 space-x-5">
          {NavBarLinks.map((link) => (
            <a
              href={link.link}
              key={link.id}
              className="text-base text-white hover:text-themeColor transition duration-300"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact">
            {/* <button className="bg-themeColor text-white hover:text-black px-4 py-1.5 rounded-full text-base transition duration-300">
              CONTACT
            </button> */}
            <button className="text-white hover:text-themeColor text-base transition duration-300">
              CONTACT
            </button>
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-dark transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        } flex flex-col items-center justify-center space-y-8`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FiX className="w-8 h-8" />
        </button>

        {/* Mobile Links */}
        {NavBarLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            onClick={() => setIsOpen(false)}
            className="text-lg text-white hover:text-themeColor transition"
          >
            {link.name}
          </a>
        ))}

        <a href="#contact" onClick={() => setIsOpen(false)}>
          <button className="text-white hover:text-themeColor text-base transition duration-300">
            CONTACT
          </button>
        </a>
      </div>
    </header>
  );
}
