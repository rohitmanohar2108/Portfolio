import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className='mb-4'>You can find me everywhere</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/rohitmanohar2108" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-manohar-80b949207/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/rohitmanohar2108/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://twitter.com/imrohit372" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="mailto:rohitmanohar2108@gmail.com" className="hover:text-blue-800 transition-colors">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
        <div className="text-left mb-16 text-xl">
          <p className="text-white">No &copy; copyright issues.</p>
          <p>Feel free to copy. If you need any help, ping me!</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
