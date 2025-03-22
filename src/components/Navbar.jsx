import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/90 h-24 rounded-b-xl shadow-md flex items-center justify-between px-6 md:px-12 lg:px-16">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Link to="/"><img src={logo} alt="Logo" className="h-8 md:h-8 w-auto transition-transform transform hover:scale-130 duration-300 ease-in-out" /></Link>
        
      </div>

      {/* Center - Marklify */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
        {/* <span className="text-5xl font-bold">
            <motion.h1
            initial={{color:"#d20089 "}}
            animate={{color: ["#f61952 ", "#f52828 ", "#a60fbd", "#f13a0d"]}}
            transition={{duration: 2, repeat: Infinity}}
            >Marklify</motion.h1>
        </span> */}
      </div>

      {/* Right - Buttons & Burger Menu */}
      <div className="hidden md:flex space-x-4 mr-4 md:mr-10 lg:mr-20 bg-gradient-to-br from-pink-800 to-red-700 h-full w-auto md:w-[30rem] max-w-5xl p-2 md:p-3 rounded-lg md:rounded-none flex justify-center items-center">
  <Link
    to="/register-company"
    className="text-white text-sm md:text-sm px-6 py-3 md:px-10 md:py-3 hover:underline text-center rounded-md transition-transform transform hover:scale-130 duration-300 ease-in-out"
  >
    Register Company
  </Link>
  <Link
    to="/login"
    className="text-white text-sm md:text-sm px-6 py-3 md:px-10 md:py-3 hover:underline text-center rounded-md transition-transform transform hover:scale-130 duration-300 ease-in-out"
  >
    Login
  </Link>
</div>


      <div className="md:hidden flex items-center">
        <HiMenu className="text-3xl text-pink-800 cursor-pointer" onClick={() => setIsOpen(true)} />
      </div>

      {/* Sidebar */}
      {isOpen && <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)}></div>}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-r from-pink-800 to-red-700 rounded-l-xl shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 p-6`}
      >
        <button className="absolute top-4 right-4 text-2xl text-white" onClick={() => setIsOpen(false)}>
          <HiX />
        </button>
        <div className="flex flex-col space-y-6 mt-16 items-center">
          <Link to="/register-company" className="text-white text-lg hover:underline px-6 py-3 w-full text-center rounded-md">
            Register Company
          </Link>
          <Link to="/register-company" className="text-white text-lg hover:underline px-6 py-3 w-full text-center rounded-md">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
