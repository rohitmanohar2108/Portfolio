import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Header = () => {
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
        }
      });
    }
  }, []);

  return (
    <div>
      <nav
        ref={navRef}
        className="flex items-center justify-between p-4 mt-4 bg-blue-600 relative"
        style={{ minHeight: "70px" }} // Adjusted minHeight for visibility
      >
        <h1 className="text-3xl text-white font-bold font-zilla-slab">Rohit Manohar</h1>
        <ul className="flex space-x-8 font-bold text-3xl  text-white font-zilla-slab">
          <li className="cursor-pointer font-zilla-slab">About</li>
          <li className="cursor-pointer font-zilla-slab">Projects</li>
          <li className="cursor-pointer font-zilla-slab">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
