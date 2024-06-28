import React, { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import Header from "./Header";
import { gsap } from "gsap";
import { motion } from "framer-motion";
// Import your new Lottie animation JSON file (replace with your own animation)
import animationData from "../Animation/animation.json";

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

      // Animate the letters from the last to the first
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
            // Ensure the text remains "Rohit Manohar" after animation
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
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center mb-8">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <h1 className="text-7xl text-emerald-500 font-bold mb-4 " ref={textRef}>
            {splitText("Rohit Manohar")}
          </h1>
          <motion.h2
            className="text-4xl text-white font-sans mt-4"
            whileHover={{ scale: 1.1 }}
          >
            Hi, I am Rohit, a Computer Science Student at NITK
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
