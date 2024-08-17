import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-12 font-courier-prime">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="md:flex md:justify-between md:items-center">
          <div>
            <p className="text-xl mt-0 md:mb-4">No &copy; copyright issues.</p>
            <p className="mb-4 text-sm">Feel free to copy. If you need any help, ping me!</p>
          </div>
          <div className="flex flex-col text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 items-center md:items-start font-great-vibes">
            <div className='text-4xl mr-28 '>Rohit Manohar</div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-4">You can find me everywhere</p>
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
              <a href="https://github.com/rohitmanohar2108" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/rohit-manohar-80b949207/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/rohitmanohar2108/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://twitter.com/imrohit372" target="_blank" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="mailto:rohitmanohar2108@gmail.com" className="hover:text-violet-500 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;