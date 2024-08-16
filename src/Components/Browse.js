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
import animationDatafive from "../Animation/animationfive.json";
import animationDataSix from "../Animation/animationsix.json";
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

  const defaultOptionsSix = {
    loop: true,
    autoplay: true,
    animationData: animationDataSix, // Use the first animation data
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
      image:
        "https://pbs.twimg.com/profile_images/1674815862879178752/nTGMV1Eo_400x400.jpg",
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
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5c76bcaaa7ea43100043c836/0x0.jpg?format=jpg&crop=1795,1795,x227,y22,safe&height=416&width=416&fit=bounds",
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
      title: "NewScope",
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_AHVaSSa3whBd2HhaMMjdvaPkb9mW%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_2hmfJkPd9Zdg3JRu5ruKqVazZ59j",
      description:
        "A simple and beautiful News Website made with Pure React JS by data fetching using NEWS API.",
      githubLink: "https://github.com/rohitmanohar2108/Newscope",
    },
    {
      title: "Portfolio",
      image:
        "https://vercel.com/_next/image?url=%2Fapi%2Fscreenshot%3Fdark%3D1%26deploymentId%3Ddpl_7Y9FpWv69queCmGADmVNmVJdG2mn%26teamId%3Drohits-projects-1ff89b20%26withStatus%3D1&w=1920&q=75&dpl=dpl_FiBQnYrddQgY6gXbDfYW3CAz2ag7",
      description:
        "A simple and beautiful Portfolio Website made with Pure React JS. With some beautiful Animation.",
      githubLink: "https://github.com/rohitmanohar2108/Portfolio",
    },
    {
      title: "Page Replacement Algo",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2020/04/Page-Replacement-Algorithms.jpg",
      description:
        "Developed a dynamic web application using HTML, CSS, Bootstrap, and jQuery to simulate and analyze FIFO, LRU,and Optimal page replacement algorithms.",
      githubLink:
        "https://github.com/rohitmanohar2108/OS-LAB-PROJECT/tree/main/Page-Replacement",
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

  const certifications = [
    {
      id: 1,
      logoSrc: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      name: "C++ Programming",
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-18d6bb61-0afd-4f93-a950-22da50d68372.jpg?v=1685001837000",
    },
    {
      id: 2,
      logoSrc:
        "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1732147200&v=beta&t=3VXpZyiP86LrKXtnxgm1KNkPqkxm6lndd7_x4fkXYvE",
      name: "Problem Solving Basic",
      link: "https://www.hackerrank.com/certificates/a409daa53e15",
    },
    {
      id: 3,
      logoSrc:
        "https://media.licdn.com/dms/image/v2/C4D0BAQFd9H6cxFC3wQ/company-logo_100_100/company-logo_100_100/0/1630549313166?e=1732147200&v=beta&t=lbbuC7_bSl16Rew1PlMvMKwtWRkGij7zkzxZYUNPHAo",
      name: "Namaste React",
      link: "https://media.licdn.com/dms/image/v2/D562DAQGBRip9wMxEyQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720373809961?e=1724410800&v=beta&t=cs_oObs7ai9t90xKXErxQRXLWk1g4Ifujy2mLpwGvEg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950  relative overflow-y-auto">
      <Header
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-9">
          <div className=" flex flex-row items-center ">
            <motion.div className="mr-8" whileHover={{ scale: 1.1 }}>
              <Lottie options={defaultOptions} height={400} width={400} />
            </motion.div>
          </div>
          <motion.h1
            className="text-9xl  text-cyan-400  font-chakra-petch"
            ref={textRef}
            whileHover={{
              scale: 1.1,
              color: "#1E90FF",
              textShadow: "0px 8px 15px rgba(255, 105, 180, 0.8)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Hi👋!
          </motion.h1>

          <motion.h2
            className="mb-6 text-6xl text-white font-sans mt-4"
            whileHover={{
              y: -10,
              opacity: 0.8,
              color: "#1E90FF",
              textShadow: "0px 4px 8px rgba(0, 255, 255, 0.8)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            I'm Rohit, a Computer Science Student at NITK
          </motion.h2>
          <div className="border rounded-lg border-cyan-400 w-full max-w-md mt-4 pt-4 text-center shadow-lg shadow-indigo-500/50">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 font-bold transition-transform transform hover:scale-105 mb-3 text-3xl font-sans">
              Seeking Internship Opportunities
            </p>
          </div>
        </div>

        <motion.div
          className="shadow-xl shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 mt-16 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center space-x-4 overflow-hidden">
            <motion.img
              src={quotes[currentQuoteIndex].image}
              alt={quotes[currentQuoteIndex].author}
              className="h-56 w-56 object-cover rounded-full"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-3xl text-white font-dancing-script">
                {quotes[currentQuoteIndex].text}
              </p>
              <p className="text-xl mt-3 text-white">
                - {quotes[currentQuoteIndex].author}
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          ref={aboutRef}
          className="shadow-xl shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 mt-16 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            src="https://eu-central.storage.cloudconvert.com/tasks/c6c19d99-5c79-4247-b7be-2e723dad9401/WhatsApp%20Image%202024-08-16%20at%2000.47.15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240815%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240815T191905Z&X-Amz-Expires=86400&X-Amz-Signature=a337760ebc1a4a94d1e3bdfa566aaac19b6e0d10b33560a9111c39e99be89e27&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22WhatsApp%20Image%202024-08-16%20at%2000.47.15.png%22&response-content-type=image%2Fpng&x-id=GetObject"
            alt="Rohit"
            className="w-56 h-56 rounded-full mr-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-3xl font-bold font-bold mb-3 transition-transform transform hover:scale-105 hover:text-blue-500 hover:shadow-lg">
              About Me
            </h3>

            <motion.p
              className=" text-white text-xl"
              whileHover={{
                y: -5,
                color: "#1E90FF",
              }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I am a Computer Science Student at NITK. I have a deep passion for
              coding and constantly strive to enhance my skills by learning new
              technologies. I love tackling challenging problems and finding
              innovative solutions. My areas of interest include web
              development, programming, and many more. I am always eager to
              collaborate on exciting projects and learn from others in the
              field. When I am not coding, I enjoy exploring the latest tech
              trends and participating in hackathons and coding competitions.
              Let's connect and create something amazing together! Whether it's
              building a new app, diving into a complex algorithm, or simply
              exchanging knowledge, I am excited to engage with like-minded
              individuals and contribute to the tech community.
            </motion.p>

            <motion.div
              className="flex mt-4 space-x-4 z-20 relative"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <a
                href="https://github.com/rohitmanohar2108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaGithub className="text-4xl hover:text-violet-500 transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-manohar-80b949207/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaLinkedin className="text-4xl hover:text-violet-500 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rohitmanohar2108/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram className="text-4xl hover:text-violet-500 transition-colors" />
              </a>
              <a
                href="https://twitter.com/imrohit372"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaTwitter className="text-4xl hover:text-violet-500 transition-colors" />
              </a>
            </motion.div>
          </div>
        </motion.div>
        <div className="max-w-2xl mx-auto mt-20">
          <div className="mb-4">
            <div className="border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
                Experience
              </h2>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-start mb-12">
              <div className="w-full pr-8">
                <div className="relative border-l border-cyan-400 pl-6">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      Member, TEDx NITK Surathkal Media Team
                    </h3>
                    <span className="block mb-2 text-sm font-normal leading-none text-gray-400">
                      Dec 2022 - May 2026
                    </span>
                    <p className="mb-2 text-base font-normal text-white dark:text-gray-300">
                      • Designed posters and promotional materials for TEDx
                      events, enhancing visual communication and branding
                      efforts.
                    </p>
                    <p className="mb-2 text-base font-normal text-white dark:text-gray-300">
                      • Collaborated on media campaigns to boost event
                      visibility and engagement.
                    </p>
                    <p className="mb-2 text-base font-normal text-white dark:text-gray-300">
                      • Technologies Used: Canva, Illustrator
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1 border-l border-gray-300 h-full"></div>
            </div>
            <div className="flex items-start">
              <div className="w-full pr-8">
                <div className="relative border-l border-cyan-400 pl-6">
                  <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
                      Student, National Institute of Technology Karnataka
                    </h3>
                    <span className="block mb-2 text-sm font-normal leading-none text-gray-400">
                      Aug 2021 - Present
                    </span>
                    <p className="mb-2 text-base font-normal text-white dark:text-gray-300">
                      • Pursuing a Bachelor’s degree in Computer Science.
                    </p>
                    <p className="mb-2 text-base font-normal text-white dark:text-gray-300">
                      • Engaged in various projects and coursework related to
                      computer science and software development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-1 border-l border-gray-300 h-full"></div>
            </div>
          </div>
        </div>

        <motion.div
          className="mt-16"
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Lottie options={defaultOptionsTwo} height={400} width={400} />
        </motion.div>

        <motion.div
          className="shadow-xl shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 mt-16 p-8  bg-black bg-opacity-30 rounded-lg shadow-lg flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-3xl font-sans font-bold mb-3 transition-transform transform hover:scale-105 hover:text-blue-500 hover:shadow-lg">
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

        <div className=" border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Projects
          </h2>
        </div> 
        <motion.div
          ref={projectsRef}
          className="shadow-xl shadow-cyan-500/50 border-multicolor outline hover:outline-2 ring-2 mt-16 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
        

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="shadow-xl shadow-cyan-500/50 border bg-black rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white font-normal text-base mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-base flex items-center"
                  >
                    <FaGithub className="text-3xl hover:text-white transition-colors mr-2" />
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mt-8 mr-8" whileHover={{ scale: 1.1 }}>
          <Lottie options={defaultOptionsSix} height={400} width={400} />
        </motion.div>

        <div className=" border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Certifications
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          {/* Certifications Section */}
          <div className="flex justify-between space-x-4">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                className="border rounded-lg border-cyan-400 p-4 shadow-xl shadow-indigo-500/50 bg-white w-full text-center"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center">
                    <img
                      src={cert.logoSrc}
                      alt={`${cert.name} Logo`}
                      className="w-24 h-auto mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-800">
                      {cert.name}
                    </h3>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 mt-11 transition-transform transform hover:-translate-y-2 hover:text-blue-500">
          Coffee with me.
        </div>

        <motion.p
          className="text-bold font-normal text-2xl text-white mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            color: "#1E90FF",
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            },
            textShadow: "0px 4px 6px rgba(255, 69, 0, 0.7)",
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </motion.p>

        <div
          ref={contactRef}
          className="mt-16 flex items-center justify-between mr-48"
        >
          <Lottie options={defaultOptionsfour} height={400} width={400} />
          <button
            className="shadow-md shadow-indigo-500/50 bg-violet-600 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-3xl py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors transition-transform transform hover:scale-105"
            onClick={toggleForm}
          >
            Contact Me
          </button>
        </div>

        {formVisible && (
          <animated.form
            style={formAnimation}
            className="border rounded-lg border-cyan-400 p-4 shadow-lg shadow-indigo-500/50 mt-8 p-8 bg-black bg-opacity-30 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105"
          >
            <div className="mb-4">
              <label
                className="block text-white text-lg font-bold mb-2"
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
                className="block text-white text-lg font-bold mb-2"
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
                className="block text-white text-lg font-bold mb-2"
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
                className="shadow-md shadow-indigo-600/50 bg-violet-600 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 text-2xl font-bold py-2 px-4 rounded-lg hover:bg-violet-700 transition-colors transition-transform transform hover:scale-105"
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