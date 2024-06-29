import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import Header from "./Header";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import animationData from "../Animation/animation.json";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

// Import Devicon CSS (already added link)
import "devicon/devicon.min.css";

const Portfolio = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll(".letter");

      gsap.fromTo(
        letters,
        { opacity: 0, scale: 0.5, rotation: -45, x: -20 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          stagger: { each: 0.08, from: "start" },
          duration: 1,
          onComplete: () => {
            const reorderedLetters = Array.from(letters).sort(
              (a, b) => a.dataset.index - b.dataset.index
            );
            reorderedLetters.forEach((letter) => {
              textRef.current.appendChild(letter);
            });
          },
        }
      );
    }
  }, [textRef]);

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} data-index={index} className="letter inline-block">
        {char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-black relative overflow-y-auto">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-9">
          <motion.div className="mt-8" whileHover={{ scale: 1.1 }}>
            <Lottie options={defaultOptions} height={400} width={400} />
          </motion.div>
          <h1 className="text-7xl text-pink-600 font-bold mt-4" ref={textRef}>
            {splitText("Rohit Manohar")}
          </h1>
          <motion.h2
            className="text-4xl text-white font-sans mt-4"
            whileHover={{ scale: 1.1 }}
          >
            Hi, I am Rohit, a Computer Science Student at NITK
          </motion.h2>
        </div>
        <motion.div
          className="mt-16 p-8 bg-gray-800 rounded-lg shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://media-sin6-2.cdn.whatsapp.net/v/t61.24694-24/426021548_762504602111403_3961460611984576911_n.jpg?ccb=11-4&oh=01_Q5AaIA4o3BITHKBtjO9y596jqVhz6qE02EjFppCgCIVcvZn1&oe=66869524&_nc_sid=e6ed6c&_nc_cat=105"
            alt="Rohit"
            className="w-56 h-56 rounded-full mr-8"
          />
          <div>
            <h3 className="text-2xl text-white font-bold mb-4">About Me</h3>
            <p className="text-white text-xl">
              I am a Computer Science Student at NITK. I have a deep passion for
              coding and constantly strive to enhance my skills by learning new
              technologies. I love tackling challenging problems and finding
              innovative solutions. My areas of interest include web
              development, Programming and many more. I am always eager to
              collaborate on exciting projects and learn from others in the
              field. When I am not coding, I enjoy exploring the latest tech
              trends and participating in hackathons and coding competitions.
              Let's connect and create something amazing together! Whether it's
              building a new app, diving into a complex algorithm, or simply
              exchanging knowledge, I am excited to engage with like-minded
              individuals and contribute to the tech community.
            </p>
            
            <div className="flex mt-4 space-x-4 z-20 relative">
              <a
                href="https://github.com/rohitmanohar2108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="text-4xl hover:text-gray-400 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin className="text-4xl hover:text-gray-400 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rohitmanohar2108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram className="text-4xl hover:text-gray-400 transition-colors" />
              </a>
              <a
                href="https://twitter.com/imrohit372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter className="text-4xl hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
         className="mt-16 p-8 bg-gray-800 rounded-lg shadow-lg flex items-center"
         whileHover={{ scale: 1.05 }}
        >
          <p className="text-3xl text-white mt-4 mr-4">Skills:</p>
        <div className="flex mt-4 space-x-4">
                <i
                  className="devicon-react-original colored text-4xl"
                  title="React"
                ></i>
                <i
                  className="devicon-redux-plain colored text-4xl"
                  title="Redux"
                ></i>
                <i
                  className="devicon-javascript-plain colored text-4xl"
                  title="JavaScript"
                ></i>
                <i
                  className="devicon-html5-plain colored text-4xl"
                  title="HTML5"
                ></i>
                <i
                  className="devicon-css3-plain colored text-4xl"
                  title="CSS3"
                ></i>
                <i className="devicon-c-plain colored text-4xl" title="C"></i>
                <i
                  className="devicon-cplusplus-plain colored text-4xl"
                  title="C++"
                ></i>
                <i
                  className="devicon-reactrouter-plain colored text-4xl"
                  title="ReactRouter"
                ></i>
                <i
                  className="devicon-ubuntu-plain colored text-4xl"
                  title="Ubuntu"
                ></i>
                <i
                  className="devicon-linux-plain color-white text-4xl"
                  title="Linux"
                ></i>
                <i
                  className="devicon-canva-plain colored text-4xl"
                  title="Canva"
                ></i>
              </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
