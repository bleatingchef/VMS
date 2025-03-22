import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VisitorPassForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    name: "",
    otp: "",
    selfie: null,
    address: "",
    purpose: "",
    company: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, selfie: e.target.files[0] });
  };

  const sendOTP = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/visitor-pass/send-pass-otp`, {
        email: formData.email,
      });
      setOtpSent(true);
      setResendTimer(30); // Set 30 seconds cooldown
      toast.success("📩 OTP sent successfully!", { icon: "📩" });
    } catch (error) {
      toast.error("❌ Failed to send OTP. Try again!");
    }
  };

  const verifyOTP = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/visitor-pass/verify-pass-otp`,
        {
          email: formData.email,
          otp: formData.otp.toString().trim(), // ✅ Ensure OTP is a string and trimmed
        },
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("OTP Response:", response.data); // Debugging
  
      if (response.status === 200) {
        setOtpVerified(true);
        toast.success("✅ OTP verified successfully!", { icon: "✅" });
  
        // Move to Step 2 automatically after 3 seconds
        setTimeout(() => setStep(2), 3000);
      } else {
        toast.error("❌ Invalid OTP! Please try again.");
      }
    } catch (error) {
      console.error("OTP verification error:", error.response?.data || error);
  
      const errorMessage =
        error.response?.data?.message || "❌ OTP verification failed. Try again!";
      toast.error(errorMessage);
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      toast.error("❌ Please verify OTP first!");
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/visitor-pass/store`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("✅ Visitor pass generated successfully!");

      setTimeout(() => {
        window.location.href = "/"; // Redirect to Home Page
      }, 2000);
    } catch (error) {
      toast.error("❌ Error submitting form!");
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="p-4 pt-10 min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-4 pt-30 min-h-screen border rounded-lg shadow-md max-w-md mx-auto">
        {/* Step 1: OTP Verification */}
        {step === 1 && (
          <>
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />

            {otpSent ? (
              <>
                <input type="text" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} required className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
                <button type="button" onClick={verifyOTP} className="w-full bg-green-500 text-white p-2 rounded mb-2 hover:bg-green-600 active:scale-95 transition">
                  Verify OTP
                </button>

                {/* Next Button (Visible Only When OTP is Verified) */}
                {otpVerified && (
                  <button type="button" onClick={() => setStep(2)} className="w-full bg-purple-500 text-white p-2 rounded mb-2 hover:bg-purple-600 active:scale-95 transition">
                    Next
                  </button>
                )}

                {/* Resend OTP Button */}
                <button
                  type="button"
                  onClick={sendOTP}
                  disabled={resendTimer > 0}
                  className={`w-full p-2 rounded ${resendTimer > 0 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition"} mb-2`}
                >
                  {resendTimer > 0 ? `Resend OTP in ${resendTimer}s` : "Resend OTP"}
                </button>
              </>
            ) : (
              <button type="button" onClick={sendOTP} className="w-full bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-600 active:scale-95 transition">
                Send OTP
              </button>
            )}
          </>
        )}

        {/* Step 2: Upload Selfie */}
        {step === 2 && (
          <>
            <input type="file" name="selfie" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
            <button type="button" onClick={() => setStep(3)} className="w-full bg-purple-500 text-white p-2 rounded mb-2 hover:bg-purple-600 active:scale-95 transition">
              Continue
            </button>
          </>
        )}

        {/* Step 3: Address & Purpose */}
        {step === 3 && (
          <>
            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
            <input type="text" name="purpose" placeholder="Purpose" value={formData.purpose} onChange={handleChange} className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full p-2 border mb-2 placeholder-gray-400 text-pink-800" />

            <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600 active:scale-95 transition">
              Submit
            </button>
          </>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default VisitorPassForm;
