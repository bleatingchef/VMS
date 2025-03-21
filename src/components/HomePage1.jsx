import React, { useState } from 'react';
import rightImg from "../assets/cat.gif";
import logo from "../assets/logo.png";
import mobileImg from "../assets/cat.gif";
import { HiX } from 'react-icons/hi';

const HomePage1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",  // Changed from fullName to name
    email: "",
    phone: "", // Changed from mobile to phone
    comment: "" // Changed from requirements to comment
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/bookdemo/add-demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Ensures cookies are sent if needed
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        alert("Demo booked successfully!");
        setFormData({ name: "", email: "", phone: "", comment: "" });
        setIsModalOpen(false);
      } else {
        alert("Failed to book demo. Please try again.");
      }
    } catch (error) {
      console.error("Error booking demo:", error);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20 space-y-10 lg:space-y-0">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-xl md:text-4xl font-bold text-pink-800 mt-20">Mark Visitor Management</h2>
        <hr className="w-full md:w-[37rem] border-pink-800 my-4 mx-auto lg:mx-0" />
        <p className="text-black text-[12px] md:text-sm">
          Enhance security and streamline check-ins with our advanced visitor management system.
        </p>
        <p className="text-black text-[12px] md:text-sm mt-4">
          Track visitor entries in real-time, reduce wait times, and ensure a seamless check-in process with our QR code-based system.
        </p>
        <button 
          className="mt-6 px-3 py-[5px] md:px-4 py-3 md:py-2 text-white text-sm md:text-lg rounded-full bg-gradient-to-r from-pink-800 to-red-700 hover:scale-110 transition-all duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          Book Demo
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <img src={rightImg} alt="Phone Mockup" className="w-60 md:w-80" />
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg md:max-w-2xl flex flex-col md:flex-row relative transform scale-100 hover:scale-105 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-red-600"
              onClick={() => setIsModalOpen(false)}
            >
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
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <input type="email" name="email" placeholder="Work Email" value={formData.email} onChange={handleChange} className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <textarea name="comment" placeholder="Tell us about your requirements" value={formData.comment} onChange={handleChange} className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" rows="3" required></textarea>
                <button type="submit" className="w-full bg-gradient-to-br from-pink-800 to-red-600 text-white py-2 md:py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300" disabled={loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage1;
