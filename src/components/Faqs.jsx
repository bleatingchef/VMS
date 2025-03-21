import React, { useState } from 'react';
import axios from 'axios';
import logo from "../assets/logo.png";
import mobileImg from "../assets/cat.gif";
import { HiX } from "react-icons/hi";

const faqsData = {
  heading: "FAQs",
  questions: [
    { question: "How does the QR code-based visitor management system work?", answer: "The system scans a QR code at the entrance to register and check in visitors securely." },
    { question: "Is the QR code-based visitor check-in system secure?", answer: "Yes, it uses encryption and authentication mechanisms to ensure visitor data security." },
    { question: "Can I customize the pre-registration form?", answer: "Yes, you can customize the fields and requirements as per your organization's needs." },
    { question: "Can visitors check in without a mobile device?", answer: "Yes, visitors can check in using alternative verification methods like an OTP or printed QR code." },
    { question: "How can the verification team access the digital visitor pass?", answer: "Verification teams can scan the QR code or access visitor data through the admin panel." },
    { question: "Can employees pre-invite specific visitors and generate VIP passes for them?", answer: "Yes, employees can send pre-invites with unique QR codes for a smoother check-in experience." },
    { question: "Can we generate long-term passes for staff, vendors, etc., with some validity?", answer: "Yes, the system allows creating long-term passes with expiration dates for staff and vendors." },
    { question: "Does the software integrate with my access control system?", answer: "Yes, it supports integration with existing access control and security systems." },
    { question: "Is the QR code-based visitor management software easy to use?", answer: "Yes, the software is designed with a user-friendly interface for easy navigation and usage." },
    { question: "Is the software scalable to meet the needs of my growing business?", answer: "Absolutely! It is built to scale as your business grows and visitor traffic increases." },
    { question: "What type of support is available for the QR code-based system?", answer: "24/7 customer support is available via email, chat, and phone to assist users." }
  ]
};

const Faqs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', comment: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/faqs/add-faqs`, formData);
      setMessage(response.data.message);
      setFormData({ name: '', email: '', phone: '', comment: '' });

      if (response.status >= 200 && response.status < 300) {
        alert("Question submitted successfully!");
        setIsModalOpen(false);
      } else {
        alert("Failed to Submit.");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className='text-black flex flex-col items-center p-6'>
      <h2 className='text-5xl font-semibold text-pink-800 mb-4'>{faqsData.heading}</h2>
      <div className="w-full max-w-7xl">
        <div className="space-y-3 text-black">
          {faqsData.questions.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow rounded-lg ">
              <input type="checkbox" id={`faq-accordion-${index}`} className="peer hidden" />
              <label htmlFor={`faq-accordion-${index}`} className="collapse-title text-lg cursor-pointer block p-4">
                {faq.question}
              </label>
              <div className="collapse-content text-sm text-pink-800 px-4 py-2 peer-checked:block hidden">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h1 className='font-normal text-pink-800 text-2xl p-12'>
        Have a question for us?
        <button className='hover:cursor-pointer ' onClick={() => setIsModalOpen(true)}> Click here to submit.</button>
      </h1>

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
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work Email" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" required />
                <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="Tell us about your requirements" className="w-full p-2 md:p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-red-400" rows="3" required></textarea>
                <button type="submit" className="w-full bg-gradient-to-br from-pink-800 to-red-600 text-white py-2 md:py-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
              </form>
              {message && <p className="mt-2 text-center text-red-600">{message}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faqs;
