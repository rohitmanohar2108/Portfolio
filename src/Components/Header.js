import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = ({ aboutRef, projectsRef, contactRef }) => {
  const navRef = useRef(null);

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

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={navRef} className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl mt-2 text-white font-bold font-great-vibes">Rohit Manohar :)</h1>
        <div className="ml-16 flex text-xl space-x-4">
          <button
            onClick={() => scrollToRef(aboutRef)}
            className="bg-cyan-500 shadow-lg shadow-indigo-500/50 bg-white text-white px-6 py-2 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToRef(projectsRef)}
            className="bg-cyan-500 shadow-lg shadow-indigo-500/50 bg-cyan-500 bg-white text-white px-4 py-2 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToRef(contactRef)}
            className="bg-cyan-500 shadow-lg bg-cyan-500 shadow-indigo-500/50 text-white px-4 py-2 rounded-lg font-bold shadow-md transition-transform transform hover:scale-105 hover:bg-cyan-400"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
