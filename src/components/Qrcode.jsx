import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "../assets/logo.png";
import mobileImg from "../assets/cat.gif";
import { HiX } from "react-icons/hi";
import { FaBolt, FaFileMedical, FaStar, FaUserCheck, FaIdCard, FaQrcode } from "react-icons/fa";

const Qrcode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const qrValue = "https://youtube.com"; // Change this to your target URL

  const features = [
    { icon: <FaBolt size={40} />, title: "Lightning Fast Check-Ins" },
    { icon: <FaFileMedical size={40} />, title: "Covid-19 Health Declarations" },
    { icon: <FaStar size={40} />, title: "Branded Welcome to Visitors" },
    { icon: <FaQrcode size={40} />, title: "Visitor Authentication" },
    { icon: <FaUserCheck size={40} />, title: "KYC Compliant" },
    { icon: <FaIdCard size={40} />, title: "Digital Visitor Pass" },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-pink-800 to-red-700 text-center py-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white">🔍Snap • 📝Fill • 🚀Go!</h1>
        <p className="text-lg md:text-2xl italic text-white mt-2">Quick & Hassle-Free!</p>
      </div>

      {/* QR Code Section */}
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-12 md:py-20">
        {/* Left Side: QR Code */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:mr-12">
          <h2 className="text-3xl md:text-5xl pb-4 font-bold bg-gradient-to-r from-pink-800 to-red-700 text-transparent bg-clip-text mb-6">
            A Scan or a Click – Your Choice To Transform!
          </h2>
          <div className="p-6 bg-white rounded-lg transition-all duration-300 hover:scale-105">
            <QRCodeCanvas value={qrValue} size={250} className="w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Right Side: Message and Button */}
        <div className="md:ml-12 mt-12 md:mt-0 text-center md:text-right">
          <h3 className="text-3xl md:text-5xl font-bold text-pink-800 mb-6">
            Transform Your Experience with Us!
          </h3>
          <p className="text-pink-800 mb-8 text-lg md:text-2xl leading-relaxed">
            💡 Experience the future of work with our powerful, user-friendly solution that enhances speed, accuracy, and convenience, all in just a few clicks!
          </p>
          <button
            className="bg-gradient-to-r from-pink-800 to-red-700 text-white text-lg md:text-2xl px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            ⚡ Tap, Try, Transform!
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-2xl flex flex-col md:flex-row relative transform scale-100 hover:scale-105 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              <HiX />
            </button>

            {/* Left Side */}
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center bg-gradient-to-br from-pink-800 to-red-600 text-white text-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <img src={logo} alt="Logo" className="w-16 md:w-20 mb-3" />
              <h2 className="text-lg md:text-xl font-bold">"Let’s Bring Your Vision to Life!"</h2>
              <p className="mt-2 text-sm">Connect with us, and we’ll craft the perfect solution for you.</p>
              <img src={mobileImg} alt="Mobile" className="w-20 md:w-24 mt-4 drop-shadow-lg" />
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center text-black">
              <input type="text" placeholder="Full Name" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="email" placeholder="Work Email" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="tel" placeholder="Mobile Number" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <textarea placeholder="Tell us about your requirements" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" rows="3"></textarea>
              <button className="w-full bg-gradient-to-br from-pink-800 to-red-600 text-white py-2 md:py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="text-center py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-pink-800">Instant Check-Ins, Maximum Convenience!</h1>
        <p className="text-black mt-4 text-lg md:text-xl max-w-5xl mx-auto">
          Say goodbye to long lines and paperwork—our cutting-edge visitor management system ensures a seamless and secure check-in with just a quick scan.
        </p>

        <div className="flex flex-wrap justify-center text-pink-800 gap-6 md:gap-10 mt-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center p-4 md:p-6 w-40 md:w-60 h-32 md:h-40 transition-all duration-300 transform hover:scale-105">
              <div className="text-pink-800 transition-all duration-300">{feature.icon}</div>
              <h2 className="text-sm md:text-lg font-semibold mt-2 text-center">{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Qrcode;
