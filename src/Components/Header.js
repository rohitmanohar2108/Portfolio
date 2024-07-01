import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = ({ aboutRef, projectsRef, contactRef }) => {
  const navRef = useRef(null);

  useEffect(() => {
    // Ensure navRef is not null before proceeding
    if (navRef.current) {
      gsap.from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // Set opacity to 1 after animation completes to keep it visible
          gsap.set(navRef.current, { opacity: 1 });
        },
      });
    }
  }, []);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav
        ref={navRef}
        className="flex items-center justify-between p-4 mt-4 bg-pink-600 relative"
        style={{ minHeight: "70px" }} // Adjusted minHeight for visibility
      >
        <h1 className="text-3xl text-white font-bold font-chakra-petch">Rohit Manohar</h1>
        <ul className="flex space-x-8 font-bold text-3xl text-white font-chakra-petch">
          <li onClick={() => scrollToRef(aboutRef)} className="cursor-pointer">About</li>
          <li onClick={() => scrollToRef(projectsRef)} className="cursor-pointer">Projects</li>
          <li onClick={() => scrollToRef(contactRef)} className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
