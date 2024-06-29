import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import Header from "./Header";
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
  
  const quotes = [
    {
      text:
        " 'Because the people who are crazy enough to think they can change the world are the ones who do.'",
      author: "Steve Jobs",
      image:
        "https://akshaysaini.in/img/quotes/steve-jobs.jpg",
    },
    {
      text:
        " 'Success is a lousy teacher. It seduces smart people into thinking they can't lose.'",
      author: "Bill Gates",
      image:
        "https://akshaysaini.in/img/quotes/bill-gates.jpg",
    },
    {
      text:
        "'See, you not only have to be a good coder to create a system like Linux, you have to be a sneaky bastard too.'",
      author: "Linus Torvalds",
      image:
        "https://akshaysaini.in/img/quotes/linus-torvalds.jpg",
    },
    {
      text:
        "'If you're changing the world, you're working on important things. You're excited to get up in the morning.'",
      author: "Larry Page",
      image:
        "https://akshaysaini.in/img/quotes/larry-page.jpg",
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
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/FoodAppProject.png",
      description:
        "A simple and beautiful Restaurent Website made with Pure React JS. With some beautiful Animation and data fetching using API.",
      githubLink: "https://github.com/rohitmanohar2108/feast",
    },
    {
      title: "YouTube",
      image: "https://do6gp1uxl3luu.cloudfront.net/projects/YoutubeProject.png",
      description:
        "A simple and beautiful Restaurent Website made with Pure React JS. With some beautiful Animation and data fetching using API.",
      githubLink: "https://github.com/rohitmanohar2108/feast",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-900 relative overflow-y-auto">
      <Header />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-9">
          <motion.div className="mt-8" whileHover={{ scale: 1.1 }}>
            <Lottie options={defaultOptions} height={400} width={400} />
          </motion.div>
          <h1 className="text-8xl text-teal-500  mt-6 font-tangerine" ref={textRef}>
            Rohit Manohar
          </h1>
          <motion.h2
            className="text-4xl text-white font-sans mt-4"
            whileHover={{ scale: 1.1 }}
          >
            Hi, I am Rohit, a Computer Science Student at NITK
          </motion.h2>
        </div>

        <div>
        <motion.div className="border mt-16 p-8 bg-orange-600 rounded-lg shadow-lg">
          <div className="flex items-center space-x-4 overflow-hidden">
            <img
              src={quotes[currentQuoteIndex].image}
              alt={quotes[currentQuoteIndex].author}
              className="h-56 w-56 object-cover rounded-full"
            />
            <div className="flex-1">
              <p className="text-3xl text-white font-dancing-script">{quotes[currentQuoteIndex].text}</p>
              <p className="text-xl mt-3 text-white">- {quotes[currentQuoteIndex].author}</p>
            </div>
          </div>
        </motion.div>
        </div>

        <motion.div
          className="border mt-16 p-8 bg-blue-600 rounded-lg shadow-lg flex items-center"
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
              innovative solutions. My areas of interest include web development,
              Programming and many more. I am always eager to collaborate on
              exciting projects and learn from others in the field. When I am not
              coding, I enjoy exploring the latest tech trends and participating
              in hackathons and coding competitions. Let's connect and create
              something amazing together! Whether it's building a new app, diving
              into a complex algorithm, or simply exchanging knowledge, I am
              excited to engage with like-minded individuals and contribute to the
              tech community.
            </p>
            <div className="flex mt-4 space-x-4 z-20 relative">
              <a
                href="https://github.com/rohitmanohar2108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="text-4xl hover:text-blue-900 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin className="text-4xl hover:text-blue-900 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rohitmanohar2108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram className="text-4xl hover:text-blue-900 transition-colors" />
              </a>
              <a
                href="https://twitter.com/imrohit372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter className="text-4xl hover:text-blue-900 transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border mt-14 p-8 bg-gray-800 rounded-lg shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-3xl text-white  mr-4">Skills:</p>
          <div className="flex mb-5 mt-4 space-x-4">
            <i className="devicon-react-original colored text-4xl" title="React"></i>
            <i className="devicon-redux-plain colored text-4xl" title="Redux"></i>
            <i className="devicon-javascript-plain colored text-4xl" title="JavaScript"></i>
            <i className="devicon-html5-plain colored text-4xl" title="HTML5"></i>
            <i className="devicon-css3-plain colored text-4xl" title="CSS3"></i>
            <i className="devicon-c-plain colored text-4xl" title="C"></i>
            <i className="devicon-cplusplus-plain colored text-4xl" title="C++"></i>
            <i className="devicon-reactrouter-plain colored text-4xl" title="ReactRouter"></i>
            <i className="devicon-ubuntu-plain colored text-4xl" title="Ubuntu"></i>
            <i className="devicon-linux-plain colored-white text-4xl" title="Linux"></i>
            <i className="devicon-canva-plain colored text-4xl" title="Canva"></i>
          </div>
        </motion.div>

        <div className="mt-12"></div>

        <div className="border z-10 flex flex-col items-center justify-center p-16 bg-black bg-opacity-75 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white transform hover:scale-105">
          <h2 className="mb-7 text-4xl text-white hover:text-blue-900 font-lato transition-transform transform hover:scale-105 cursor-pointer">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover  font-lato"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 font-lato">
                    {project.description}
                  </p>
                  <div className="mt-4 py-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 font-lato transition-transform transform hover:scale-105"
                    >
                      <FaGithub className="text-xl mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Portfolio;