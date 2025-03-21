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