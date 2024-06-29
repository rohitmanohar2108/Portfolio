import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            
            <p>No &copy; copyright issues.</p>
            <p>Feel free to copy. If you need any help, ping me!</p>
          </div>
          <div className="flex justify-center md:justify-end space-x-6 mb-4 mt-4 md:mt-0">
          <p className="">You can find me everywhere</p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
