import React from "react";
import { Mail, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-800 to-red-700 text-white px-6 sm:px-10 py-6 mt-8 pt-5 rounded-t-[3rem] md:rounded-t-[5rem]">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center pb-2">
        Kickstart your adventure with us today!
      </h2>
      <hr className="border-white my-4" />

      <div className="flex flex-wrap justify-between gap-6 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg">
              <img src={logo} alt="" className="w-40 sm:w-60" />
            </div>
          </div>
          <p className="text-white text-base sm:text-lg italic">
            Transforming workspaces with cutting-edge digital solutions.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-lg sm:text-xl">Contact Us</h3>
          <div className="mt-2 space-y-2 text-sm sm:text-base">
            <div className="flex items-center gap-2 text-white">
              <Mail size={16} className="text-white" />
              <span>
                <strong>For Sales</strong> - sales@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail size={16} className="text-white" />
              <span>
                <strong>For Support</strong> - support@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Mail size={16} className="text-white" />
              <span>
                <strong>For Legal</strong> - legal@markletechandmedia.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Phone size={16} className="text-white" />
              <span>+91 9999955555</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white my-6" />
      <p className="text-center text-white text-sm sm:text-base">
        © 2025 MARKLE TECH & MEDIA PVT LTD. All rights reserved.
      </p>
      <p className="text-center text-white text-xs sm:text-sm">
        Regd. Address: A-52, Som Bazar, Chowk, Vikas Nagar, Uttam Nagar East, New Delhi-110059, India.
      </p>
      <p className="text-center text-white text-xs sm:text-sm">
        Telephone: +91 9999988888 | Email: support@markletechandmedia.com | CIN:
        U7020854959595685959856
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-white mt-3 text-xs sm:text-sm">
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
        <span>Security and Compliances</span>
      </div>
    </div>
  );
};

export default Footer;
