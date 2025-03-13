import React, { useState } from "react";
import work from "../assets/workspace.jpg";

const Register = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [logo, setLogo] = useState(null); // State for company logo
  const [formData, setFormData] = useState({
    companyName: "",
    companyTagline: "",
    companyDescription: "",
    adminName: "",
    adminMobile: "",
    adminEmail: "",
    otp: "",
  });

  const handleNextStep = () => {
    if (step === 1 && formData.companyName && formData.companyTagline && formData.companyDescription) {
      setStep(2);
    } else if (step === 2 && formData.adminName && formData.adminMobile && formData.adminEmail) {
      sendOtp();
    } else if (step === 3 && otpVerified) {
      alert("Registration Completed!");
    }
  };

  const sendOtp = () => {
    setOtpSent(true);
  };

  const verifyOtp = () => {
    if (formData.otp === "1234") {
      setOtpVerified(true);
      setStep(3);
    } else {
      alert("Invalid OTP");
    }
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative text-white h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <img src={work} alt="Background" className="absolute inset-0 w-full h-full object-cover blur-md" />

      {/* Form Container */}
      <div className="relative bg-gradient-to-r from-pink-800 to-red-700 opacity-70 p-8 rounded-4xl shadow-xl h-auto w-[400px]">
        <h2 className="text-3xl font-semibold italic text-center mb-4">
          {step === 1 && "Company Registration "}
          {step === 2 && "Admin Details"}
          {step === 3 && "OTP Verification"}
        </h2>

        {/* Step 1: Company Registration */}
        {step === 1 && (
          <div className="space-y-4 flex flex-col items-center">
            {/* Logo Upload Section */}
            <label htmlFor="logo-upload" className="cursor-pointer flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-gray-300">
                {logo ? (
                  <img src={logo} alt="Logo Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-pink-800 font-bold">+</span>
                )}
              </div>
              <span className="text-sm text-white mt-2">Upload company logo</span>
              <input
                type="file"
                id="logo-upload"
                className="hidden"
                accept="image/*"
                onChange={handleLogoUpload}
              />
            </label>

            <input 
              type="text" 
              placeholder="Enter Company Name" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="Enter Company Tagline" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, companyTagline: e.target.value })} 
            />
            <textarea 
              placeholder="Company Description" 
              className="w-full p-2 border rounded-2xl placeholder-white"
              onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
            ></textarea>
          
            {/* Centered Button */}
            <div className="flex justify-center w-full">
              <button onClick={handleNextStep} className="w-40 bg-white cursor-pointer text-pink-800 p-2 rounded-full">
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Admin Details */}
        {step === 2 && (
          <div className="space-y-4 flex flex-col items-center">
            <input 
              type="text" 
              placeholder="Enter Admin Name" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, adminName: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="Enter Admin Mobile Number" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, adminMobile: e.target.value })} 
            />
            <input 
              type="email" 
              placeholder="Enter Admin Email ID" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })} 
            />
            <button onClick={handleNextStep} className="w-40 bg-white cursor-pointer text-pink-800 p-2 rounded-full">
              Get OTP
            </button>
          </div>
        )}

        {/* Step 3: OTP Verification */}
        {step === 3 && otpSent && (
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Enter OTP" 
              className="w-full p-2 border rounded-2xl placeholder-white" 
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })} 
            />
            <button onClick={verifyOtp} className="w-full bg-green-500 cursor-pointer text-white p-2 rounded">
              Verify OTP
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
