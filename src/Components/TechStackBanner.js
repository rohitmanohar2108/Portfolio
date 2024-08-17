import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStackBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { x: '-100vw', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: bannerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <motion.div
      ref={bannerRef}
      className="shadow-xl shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 mt-16 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg flex items-center"
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-3xl font-courier-prime font-normal mb-3 transition-transform transform hover:scale-105 hover:text-blue-500 hover:shadow-lg">
        Some of the Tech Stack I know:
      </p>

      <div className="flex mb-5 mt-4 space-x-4">
        <i className="devicon-react-original colored text-4xl" title="React"></i>
        <i className="devicon-javascript-plain colored text-4xl" title="JavaScript"></i>
        <i className="devicon-redux-plain colored text-4xl" title="Redux"></i>
        <i className="devicon-html5-plain colored text-4xl" title="HTML5"></i>
        <i className="devicon-css3-plain colored text-4xl" title="CSS3"></i>
        <i className="devicon-tailwindcss-plain colored text-4xl" title="Tailwind CSS"></i>
        <i className="devicon-c-plain colored text-4xl" title="C"></i>
        <i className="devicon-cplusplus-plain colored text-4xl" title="C++"></i>
        <i className="devicon-reactrouter-plain colored text-4xl" title="ReactRouter"></i>
        <i className="devicon-ubuntu-plain colored text-4xl" title="Ubuntu"></i>
        <i className="devicon-linux-plain colored-white text-4xl" title="Linux"></i>
        <i className="devicon-canva-plain colored text-4xl" title="Canva"></i>
      </div>
    </motion.div>
  );
};

export default TechStackBanner;
