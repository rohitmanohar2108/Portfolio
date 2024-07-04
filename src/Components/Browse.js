import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import Header from "./Header";
import { motion } from "framer-motion";
import animationData from "../Animation/animation.json";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";
import animationDataTwo from "../Animation/animationtwo.json";
import { useSpring, animated } from "@react-spring/web";
import animationDatathree from "../Animation/animationthree.json";
import animationDatafour from "../Animation/animationfour.json";
import animationDatafive from "../Animation/animationfive.json"
// Import Devicon CSS (already added link)
import "devicon/devicon.min.css";
import Footer from "./Footer";

const Portfolio = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsTwo = {
    loop: true,
    autoplay: true,
    animationData: animationDataTwo, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsThree = {
    loop: true,
    autoplay: true,
    animationData: animationDatathree, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsfour = {
    loop: true,
    autoplay: true,
    animationData: animationDatafour, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptionsfive = {
    loop: true,
    autoplay: true,
    animationData: animationDatafive, // Use the first animation data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const quotes = [
    {
      text: " 'Because the people who are crazy enough to think they can change the world are the ones who do.'",
      author: "Steve Jobs",
      image: "https://akshaysaini.in/img/quotes/steve-jobs.jpg",
    },
    {
      text: " 'Success is a lousy teacher. It seduces smart people into thinking they can't lose.'",
      author: "Bill Gates",
      image: "https://akshaysaini.in/img/quotes/bill-gates.jpg",
    },
    {
      text: "' I think it is possible for ordinary people to choose to be extraordinary.'",
      author: "Elon Musk",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCPblxoSQ8E0dWaakrQDUt73M_hS63hE9cg&s",
    },
    {
      text: "'See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too.'",
      author: "Linus Torvalds",
      image: "https://akshaysaini.in/img/quotes/linus-torvalds.jpg",
    },
    {
      text: "'If you're changing the world, you're working on important things. You're excited to get up in the morning.'",
      author: "Larry Page",
      image: "https://akshaysaini.in/img/quotes/larry-page.jpg",
    },
    {
      text: " 'You don’t need to be a genius or a visionary, or even a college graduate for that matter, to be successful. You just need framework and a dream.'",
      author: "Michael Dell",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/615c93f9da61f2ff5b9ecf9b/0x0.jpg?format=jpg&crop=1678,1679,x0,y118,safe&height=416&width=416&fit=bounds",
    },
  ];

  // State to manage the current quote index for scrolling
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // Effect to automatically scroll to the next quote
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "FilmNinja",
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
      description:
        "I created a Netflix clone using ReactJs and Tailwindcss. This is a clone of Netflix website. And played a lot with Api.",
      githubLink: "https://github.com/rohitmanohar2108/FilmNinja",
    },
    {
      title: "Feast",
      image: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_67VjCajdwZiQjimtTHp4fJs8Cm6M%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_EMUYSbisdADPiTCeU3XxAy17N6hL",
      description:
        "A simple and beautiful Restaurent Website made with Pure React JS. With some beautiful Animation and data fetching using API.",
      githubLink: "https://github.com/rohitmanohar2108/feast",
    },
    {
      title: "Portfolio",
      image: "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D0%26deploymentId%3Ddpl_67VjCajdwZiQjimtTHp4fJs8Cm6M%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_EMUYSbisdADPiTCeU3XxAy17N6hL",
      description:
        "A simple and beautiful Portfolio Website made with Pure React JS. With some beautiful Animation.",
      githubLink: "https://github.com/rohitmanohar2108/Portfolio",
    },
  ];

  const [formVisible, setFormVisible] = useState(false);

  const formAnimation = useSpring({
    opacity: formVisible ? 1 : 0,
    transform: formVisible ? "translateY(0)" : "translateY(-20px)",
  });

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950  relative overflow-y-auto">
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-9">
          <div className="flex flex-row items-center mt-8">
            <motion.div className="mr-8" whileHover={{ scale: 1.1 }}>
              <Lottie options={defaultOptions} height={400} width={400} />
            </motion.div>
            
          </div>
          <h1
            className="text-8xl text-indigo-600 mt-6 font-chakra-petch"
            ref={textRef}
          >
            Rohit Manohar
          </h1>
          <motion.h2
            className="mb-6 text-4xl text-white font-sans mt-4"
            whileHover={{ scale: 1.1 }}
          >
            Hi, I am Rohit, a Computer Science Student at NITK
          </motion.h2>
        </div>

        <div>
          <motion.div className="border-double border-4 border-indigo-600 outline hover:outline-2 ring-2 mt-16 p-8  bg-pink-700 bg-opacity-30 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4 overflow-hidden">
              <img
                src={quotes[currentQuoteIndex].image}
                alt={quotes[currentQuoteIndex].author}
                className="h-56 w-56 object-cover rounded-full"
              />
              <div className="flex-1">
                <p className="text-3xl text-white font-dancing-script">
                  {quotes[currentQuoteIndex].text}
                </p>
                <p className="text-xl mt-3 text-white">
                  - {quotes[currentQuoteIndex].author}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={aboutRef}
          className="border-double border-4 border-indigo-600 outline hover:outline-2 ring-2 mt-16 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg flex items-center "
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://media-sin6-2.cdn.whatsapp.net/v/t61.24694-24/426021548_762504602111403_3961460611984576911_n.jpg?ccb=11-4&oh=01_Q5AaIA4o3BITHKBtjO9y596jqVhz6qE02EjFppCgCIVcvZn1&oe=66869524&_nc_sid=e6ed6c&_nc_cat=105"
            alt="Rohit"
            className="w-56 h-56 rounded-full mr-8"
          />
          <div>
            <h3 className="text-2xl text-pink-600 font-bold mb-4 transition-transform transform hover:scale-105">
              About Me
            </h3>
            <p className="text-pink-600 text-xl">
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
            <div className="flex mt-4  space-x-4 z-20 relative">
              <a
                href="https://github.com/rohitmanohar2108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="text-4xl hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin className="text-4xl hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rohitmanohar2108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram className="text-4xl hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://twitter.com/imrohit372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter className="text-4xl hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-16 " whileHover={{ scale: 1.1 }}>
          <Lottie options={defaultOptionsTwo} height={400} width={400} />
        </motion.div>

        <motion.div
          className="border-double border-4 border-indigo-600 outline hover:outline-2 ring-2 mt-14 p-8 bg-pink-600 bg-opacity-30 rounded-lg shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-3xl text-pink-600 mr-4">
            Some of the Tech Stack I know:
          </p>
          <div className="flex mb-5 mt-4 space-x-4">
            <i
              className="devicon-react-original colored text-4xl"
              title="React"
            ></i>
            <i
              className="devicon-javascript-plain colored text-4xl"
              title="JavaScript"
            ></i>
            <i
              className="devicon-redux-plain colored text-4xl"
              title="Redux"
            ></i>
            <i
              className="devicon-html5-plain colored text-4xl"
              title="HTML5"
            ></i>
            <i className="devicon-css3-plain colored text-4xl" title="CSS3"></i>
            <i
              className="devicon-tailwindcss-plain colored text-4xl"
              title="Tailwind CSS"
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
              className="devicon-linux-plain colored-white text-4xl"
              title="Linux"
            ></i>
            <i
              className="devicon-canva-plain colored text-4xl"
              title="Canva"
            ></i>
          </div>
        </motion.div>
        <div className="mt-32 mb-24">
        <Lottie options={defaultOptionsfive} height={200} width={880} />
        </div>
        <motion.div
          ref={projectsRef}
          className="border-double border-4 border-indigo-600 outline hover:outline-2 ring-2 mt-14 p-8 bg-pink-600 bg-opacity-30 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-3xl text-pink-600 hover:text-white mb-7 text-center font-bold transition-transform transform hover:scale-105">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border bg-black rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl text-pink-600 hover:text-white font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-pink-600 text-base mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline text-base"
                  >
                    <FaGithub className="text-3xl hover:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="text-bold text-4xl text-pink-600 hover:text-white mt-11 transition-transform transform hover:scale-105">
          Coffee with me.
        </div>
        <p className="text-bold text-2xl text-pink-600 mt-6">
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </p>

        <div
          ref={contactRef}
          className="mt-16 flex items-center justify-between mr-48"
        >
          <Lottie options={defaultOptionsfour} height={200} width={200} />
          <button
            className="text-2xl bg-pink-600 text-white font-bold py-2 px-4 ml-3 rounded-lg hover:bg-blue-800 transition-colors shadow-xl"
            onClick={toggleForm}
          >
            Contact Me
          </button>
        </div>

        {formVisible && (
          <animated.form
            style={formAnimation}
            className="border border-style:dashed mt-8 p-8 bg-pink-600 bg-opacity-30 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105"
          >
            <div className="mb-4">
              <label
                className="block text-pink-600 text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-900"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-pink-600 text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg text-gray-900"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-pink-600 text-lg font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg text-gray-900"
                id="message"
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-pink-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </animated.form>
        )}
      </div>
      <div></div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-400 text-black rounded-full hover:bg-blue-900 transition-colors"
        >
          <FaArrowUp />
        </button>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;