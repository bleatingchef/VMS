import React from "react";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-800 to-red-700 text-white px-6 sm:px-10 py-6 mt-8 pt-5 rounded-t-[3rem] md:rounded-t-[5rem]">
      <h2 className="text-lg sm:text-2xl text-center pb-2">
        Kickstart your adventure with us today!
      </h2>
      <hr className="border-white my-4" />

      <div className="flex flex-wrap justify-between gap-6 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg">
            <Link to="/"><img src={logo} alt="Logo" className="h-8 md:h-10 w-auto transition-transform transform hover:scale-110 duration-300 ease-in-out" /></Link>
              
            </div>
          </div>
          <p className="text-white text-xs sm:text-sm italic">
            Transforming workspaces with cutting-edge digital solutions.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-sm sm:text-lg">Contact Us</h3>
          <div className="mt-2 space-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-white transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <Mail size={10} className="text-white" />
              <span className="text-[8px] sm:text-xs">
                <strong>For Sales</strong> - sales@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <Mail size={10} className="text-white" />
              <span className="text-[8px] sm:text-xs ">
                <strong>For Support</strong> - support@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <Mail size={10} className="text-white" />
              <span className="text-[8px] sm:text-xs">
                <strong>For Legal</strong> - legal@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white transition-transform transform hover:scale-110 duration-300 ease-in-out">
              <Phone size={10} className="text-white" />
              <span className="text-[8px] sm:text-xs">+91 9999955555</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white my-6" />
      <p className="text-center text-white text-[8px] sm:text-xs">
        © 2025 MARKLE TECH & MEDIA PVT LTD. All rights reserved.
      </p>
      <p className="text-center text-white text-[8px] sm:text-xs ">
        Regd. Address: A-52, Som Bazar, Chowk, Vikas Nagar, Uttam Nagar East, New Delhi-110059, India.
      </p>
      <p className="text-center text-white text-[8px] sm:text-xs">
        Telephone: +91 9999988888 | Email: support@markletechandmedia.com | CIN:
        U7020854959595685959856
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-white mt-3 text-[6px] sm:text-[10px]">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Security and Compliances</span>
      </div>
    </div>
  );
};

export default Footer;
