import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = ({ aboutRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(navRef.current, { opacity: 1 });
        },
      });
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.from(menuRef.current, {
          opacity: 0,
          x: 20,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <header ref={navRef} className="bg-black p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl sm:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold font-great-vibes h-14">
          Rohit Manohar :)
        </h1>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl sm:hidden relative"
        >
          {isMenuOpen ? '✖️' : '☰'}
          {/* Dropdown Menu */}
          <div
            ref={menuRef}
            className={`absolute top-full right-0 mt-2 bg-black p-4 shadow-lg w-48 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500"
            >
              About
            </button>
            <button
              onClick={() => scrollToRef(projectsRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500 last:border-b-0"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToRef(contactRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500"
            >
              Contact
            </button>
          </div>
        </button>

        {/* Hamburger Menu Button for Desktop */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden sm:block text-white text-3xl relative "
          style={{ left: '60px' }}
        >
          {isMenuOpen ? '✖️' : '☰'}
          {/* Dropdown Menu for Desktop */}
          <div
            ref={menuRef}
            className={`absolute top-full right-0 mt-2 bg-black p-4 shadow-lg w-48 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <button
              onClick={() => scrollToRef(aboutRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500 "
            >
              About
            </button>
            <button
              onClick={() => scrollToRef(projectsRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500 last:border-b-0"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToRef(contactRef)}
              className="block text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-lg font-courier-prime shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400 w-full text-left border-b border-indigo-500"
            >
              Contact
            </button>
          </div>
        </button>

        {/* Menu Items for Desktop (Removed) */}
      </div>
    </header>
  );
};

export default Header;
