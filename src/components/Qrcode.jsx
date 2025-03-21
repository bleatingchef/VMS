import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import logo from "../assets/logo.png";
import mobileImg from "../assets/cat.gif";
import { HiX } from "react-icons/hi";
import { FaBolt, FaFileMedical, FaStar, FaUserCheck, FaIdCard, FaQrcode } from "react-icons/fa";
import axios from "axios";

const Qrcode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", comment: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  const formURL= `${window.location.origin}/visitor-form`;
  // const qrValue = {formURL};
{/* <QRCode value={formURL} size={200}/> */}
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/transform/add-transform-visitors`, formData);
      setMessage(response.data.message);
      setFormData({ name: "", email: "", phone: "", comment: "" });
      
      if (response.status >= 200 && response.status < 300) {
        alert("Transformed successfully!");
        setIsModalOpen(false);
      } else {
        alert("Failed to Transform.");
      }
    } 
    catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

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
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:mr-12">
          <h2 className="text-3xl md:text-5xl pb-4 font-bold bg-gradient-to-r from-pink-800 to-red-700 text-transparent bg-clip-text mb-6">
            A Scan or a Click – Your Choice To Transform!
          </h2>
          <div className="p-6 bg-white rounded-lg transition-all duration-300 hover:scale-105">
            <QRCodeCanvas value={formURL} size={250} className="w-full h-full rounded-lg" />
          </div>
        </div>

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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 px-4" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-2xl flex flex-col md:flex-row relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-600" onClick={() => setIsModalOpen(false)}>
              <HiX />
            </button>
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col items-center justify-center bg-gradient-to-br from-pink-800 to-red-600 text-white text-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <img src={logo} alt="Logo" className="w-16 md:w-20 mb-3" />
              <h2 className="text-lg md:text-xl font-bold">"Let’s Bring Your Vision to Life!"</h2>
              <p className="mt-2 text-sm">Connect with us, and we’ll craft the perfect solution for you.</p>
              <img src={mobileImg} alt="Mobile" className="w-20 md:w-24 mt-4 drop-shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center text-black">
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" className="w-full p-2 md:p-3 border rounded-lg mb-3" onChange={handleChange} value={formData.name} required />
                <input type="email" name="email" placeholder="Work Email" className="w-full p-2 md:p-3 border rounded-lg mb-3" onChange={handleChange} value={formData.email} required />
                <input type="tel" name="phone" placeholder="Mobile Number" className="w-full p-2 md:p-3 border rounded-lg mb-3" onChange={handleChange} value={formData.phone} required />
                <textarea name="comment" placeholder="Tell us about your requirements" className="w-full p-2 md:p-3 border rounded-lg mb-3" onChange={handleChange} value={formData.comment} required rows="3"></textarea>
                <button type="submit" className="w-full bg-gradient-to-br from-pink-800 to-red-600 text-white py-2 md:py-3 rounded-lg shadow-md" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
                {message && <p className="text-center mt-2 text-red-500">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Qrcode;
