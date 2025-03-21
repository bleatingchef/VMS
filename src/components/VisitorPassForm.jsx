import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const API_BASE_URL = `${import.meta.env.VITE_BACKEND_URL}`; // Replace with your actual backend URL

const VisitorForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    otp: "",
    selfie: null,
    name: "",
    address: "",
    purpose: "",
    company: "",
    idProof: "",
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, selfie: e.target.files[0] });
  };

  // Send OTP to phone and email
  const sendOTP = async () => {
    if (!formData.phone || !formData.email) {
      alert("Please enter both phone and email to receive OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, email: formData.email }),
      });

      const result = await response.json();
      if (response.ok) {
        alert("OTP sent successfully!");
      } else {
        alert(result.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const verifyOTP = async () => {
    if (!formData.otp) {
      alert("Please enter the OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: formData.phone, email: formData.email, otp: formData.otp }),
      });

      const result = await response.json();
      if (response.ok) {
        setOtpVerified(true);
        nextStep();
      } else {
        alert(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  // Move to the next step
  const nextStep = () => {
    if (step === 1 && !termsChecked) {
      alert("Please accept the terms and conditions.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  // Move to the previous step
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch(`${API_BASE_URL}/submit-visitor`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("Thanks for visiting! Your details have been submitted.");
        setFormData({
          phone: "",
          email: "",
          otp: "",
          selfie: null,
          name: "",
          address: "",
          purpose: "",
          company: "",
          idProof: "",
        });
        setStep(1);
        navigate("/thank-you");
      } else {
        alert("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 mt-20 rounded-lg shadow-md w-full max-w-md">
        <div className="w-full max-w-md p-4 flex flex-col items-center">
          <img src={logo} alt="Company Logo" className="w-24 mb-2" />
          <p className="text-pink-800 text-center">A-52, Som Bazar, Chowk, Vikas Nagar, Uttam Nagar East, New Delhi-110059</p>
        </div>

        <h2 className="text-xl text-pink-800 font-bold text-center mb-4">Step {step}/6</h2>

        {step === 1 && (
          <>
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
            <button type="button" onClick={sendOTP} className="bg-pink-800 text-white p-2 rounded w-full mb-2" disabled={loading}>
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
            <label className="flex items-center">
              <input type="checkbox" checked={termsChecked} onChange={() => setTermsChecked(!termsChecked)} className="mr-2" />
              <span className="text-pink-800">I accept the terms and conditions</span>
            </label>
            <button type="button" onClick={nextStep} className="bg-pink-800 text-white p-2 rounded w-full mt-2">Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <input type="text" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-pink-800 text-white p-2 rounded w-1/2 mr-2">Back</button>
              <button type="button" onClick={verifyOTP} className="bg-pink-800 text-white p-2 rounded w-1/2" disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          </>
        )}

{step === 3 && (
    <>
      <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 mb-2 border outline outline-pink-800 rounded " required />
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gradient-to-br from-pink-800 to-red-700 text-white p-2 rounded w-1/2 mr-2">Back</button>
        <button type="button" onClick={nextStep} className="bg-gradient-to-br from-pink-800 to-red-700 text-white p-2 rounded w-1/2">Next</button>
      </div>
    </>
  )}

  {step === 4 && (
    <>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-2 border outline outline-pink-800 rounded placeholder-gray-400" required />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
      <div className="flex justify-between">
        <button type="button" onClick={prevStep} className="bg-gradient-to-br from-pink-800 to-red-700 text-white p-2 rounded w-1/2 mr-2">Back</button>
        <button type="button" onClick={nextStep} className="bg-gradient-to-br from-pink-800 to-red-700 text-white p-2 rounded w-1/2">Next</button>
      </div>
    </>
  )}

  {step === 5 && (
    <>
      <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full p-2 mb-2 border outline outline-pink-800 rounded placeholder-gray-400" required>
        <option value="">Select Purpose</option>
        <option value="I work here">I work here</option>
        <option value="Meeting appointment">Meeting appointment</option>
        <option value="Delivery">Delivery</option>
        <option value="Service">Service</option>
        <option value="Other">Other</option>
      </select>
      <button type="button" onClick={nextStep} className="bg-gradient-to-br from-pink-800 to-red-700 text-white p-2 rounded w-full">Next</button>
    </>
  )}

        {step === 6 && (
          <button type="submit" className="bg-pink-800 text-white p-2 rounded w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
};

export default VisitorForm;
