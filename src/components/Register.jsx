import React, { useState } from "react";
import work from "../assets/workspace.jpg";

// Button Component
const Button = ({ children, className, ...props }) => (
  <button className={`w-40 bg-white text-pink-800 p-2 rounded-full ${className}`} {...props}>
    {children}
  </button>
);

// Input Component
const Input = ({ className, ...props }) => (
  <input className={`w-full p-2 border rounded-2xl placeholder-white ${className}`} {...props} />
);

// TextArea Component
const TextArea = ({ className, ...props }) => (
  <textarea className={`w-full p-2 border rounded-2xl placeholder-white ${className}`} {...props} />
);

// Card Component
const Card = ({ children, className }) => (
  <div className={`relative bg-gradient-to-r from-pink-800 to-red-700 opacity-70 p-8 rounded-4xl shadow-xl h-auto w-[400px] ${className}`}>
    {children}
  </div>
);

const Register = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [processing, setProcessing] = useState(false); // New State for Step 4
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
      setProcessing(true);
      setTimeout(() => {
        setStep(4); // Move to Step 4 after delay
      }, 2000); // Simulate processing delay
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
      <Card>
        <h2 className="text-3xl font-semibold italic text-center mb-4">
          {step === 1 && "Company Registration"}
          {step === 2 && "Admin Details"}
          {step === 3 && "OTP Verification"}
          {step === 4 && "Processing Pass"}
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

            <Input
              type="text"
              placeholder="Enter Company Name"
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Enter Company Tagline"
              onChange={(e) => setFormData({ ...formData, companyTagline: e.target.value })}
            />
            <TextArea
              placeholder="Company Description"
              onChange={(e) => setFormData({ ...formData, companyDescription: e.target.value })}
            />

            <div className="flex justify-center w-full">
              <Button onClick={handleNextStep}>Next</Button>
            </div>
          </div>
        )}

        {/* Step 2: Admin Details */}
        {step === 2 && (
          <div className="space-y-4 flex flex-col items-center">
            <Input
              type="text"
              placeholder="Enter Admin Name"
              onChange={(e) => setFormData({ ...formData, adminName: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Enter Admin Mobile Number"
              onChange={(e) => setFormData({ ...formData, adminMobile: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Enter Admin Email ID"
              onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
            />
            <Button onClick={handleNextStep}>Get OTP</Button>
          </div>
        )}

        {/* Step 3: OTP Verification */}
        {step === 3 && otpSent && !processing && (
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Enter OTP"
              onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
            />
            <Button onClick={verifyOtp} className="bg-green-500 text-white">
              Verify OTP
            </Button>
          </div>
        )}

        {/* Step 4: Processing Pass */}
        {step === 4 && (
          <div className="text-center space-y-4">
            <p className="text-lg font-semibold">✅ Your pass is being processed!</p>
            <p className="text-sm">
              Your visitor pass will be sent to your number on <b>WhatsApp</b>.  
              A link to your visitor pass will also be sent to your mobile number.
            </p>
            <Button onClick={() => alert("Thank you!")} className="bg-blue-500 text-white">
              Done
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Register;
