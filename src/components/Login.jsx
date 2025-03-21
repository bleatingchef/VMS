import React, { useState } from "react";

// Button Component
const Button = ({ children, className, ...props }) => {
  return (
    <button className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className, ...props }) => {
  return <input className={`p-2 border rounded-md w-full ${className}`} {...props} />;
};

// Card Component
const Card = ({ children, className }) => {
  return <div className={`w-full max-w-md mx-auto p-6 shadow-lg rounded-xl bg-white ${className}`}>{children}</div>;
};

// Step 1
const StepOne = ({ nextStep }) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-center">Step 1: Enter Details</h2>
      <div className="flex flex-col gap-4 mt-4">
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" />
        <Button onClick={nextStep} className="w-full mt-4">Next</Button>
      </div>
    </Card>
  );
};

// Step 2
const StepTwo = ({ prevStep, nextStep }) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-center">Step 2: Additional Info</h2>
      <div className="flex flex-col gap-4 mt-4">
        <Input placeholder="Enter your phone number" />
        <Input placeholder="Enter your address" />
        <div className="flex justify-between mt-4">
          <Button onClick={prevStep} className="bg-gray-500">Back</Button>
          <Button onClick={nextStep}>Next</Button>
        </div>
      </div>
    </Card>
  );
};

// Step 3
const StepThree = ({ prevStep }) => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-center">Step 3: Confirmation</h2>
      <p className="text-gray-600 text-center">Thank you for completing the form!</p>
      <Button onClick={prevStep} className="w-full mt-4">Back</Button>
    </Card>
  );
};

// MultiStepForm Component
const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {step === 1 && <StepOne nextStep={() => setStep(2)} />}
      {step === 2 && <StepTwo prevStep={() => setStep(1)} nextStep={() => setStep(3)} />}
      {step === 3 && <StepThree prevStep={() => setStep(2)} />}
    </div>
  );
};

export default MultiStepForm;
