import React from "react";
import logo from "../assets/logo.png";

const Clients = () => {
  const clients = [
    { id: 1, name: "Fuji Electric", logo: logo },
    { id: 2, name: "Optiemus Electronics", logo: logo },
    { id: 3, name: "Jyothy Labs", logo: logo },
    { id: 4, name: "Spectra Broadband", logo: logo },
    { id: 5, name: "ICICI Prudential", logo: logo },
    { id: 6, name: "Adfactors PR", logo: logo },
    { id: 7, name: "Okinawa", logo: logo },
    { id: 8, name: "Suzlon", logo: logo },
    { id: 9, name: "OYO Workspaces", logo: logo },
    { id: 10, name: "WÖHR", logo: logo },
    { id: 11, name: "RTDS", logo: logo },
    { id: 12, name: "Unicorn DenMart", logo: logo },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-800 to-red-700 text-white px-4 md:px-10 py-16">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-12">
        Empowering Industries with Innovation!
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left Side: Bullet Points */}
        <div className="md:w-2/5 flex flex-col items-center md:items-center md:max-w-sm text-sm">
          <ul className="list-disc text-sm space-y-3">
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Telecommunications</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Banking & Insurance</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Energy</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Manufacturing</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Plant & Machinery</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Information Technology</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Healthcare</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Co-working</li>
            <li className="transition-transform transform hover:scale-120 duration-300 ease-in-out">Educational Institutions</li>
          </ul>
        </div>

        {/* Right Side: Circular Client Logos */}
        <div className="md:w-3/4 flex justify-center md:max-w-lg">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap- md:gap- ">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 
                bg-white rounded-full flex items-center justify-center shadow-xl 
                transform transition-all duration-500 ease-in-out 
                hover:scale-110 hover:shadow-neon active:scale-95
                animate-pop ${index % 2 === 0 ? "animate-bounce" : "animate-bounce2"}`}
                onTouchStart={(e) => e.currentTarget.classList.add("animate-touch")}
                onTouchEnd={(e) => e.currentTarget.classList.remove("animate-touch")}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-3/4 h-3/4 object-contain"
                />
                {/* Ripple Effect on Click */}
                <span className="ripple"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Animation Styles */}
      <style>
        {`
          @keyframes pop {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bounce2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
          @keyframes glowEffect {
            0% { box-shadow: 0 0 5px rgba(255, 0, 128, 0.5); }
            50% { box-shadow: 0 0 15px rgba(255, 0, 128, 1); }
            100% { box-shadow: 0 0 5px rgba(255, 0, 128, 0.5); }
          }
          @keyframes touchEffect {
            0% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 255, 255, 0.8); }
            100% { transform: scale(1.2); box-shadow: 0 0 20px rgba(255, 255, 255, 1); }
          }

          .animate-pop {
            animation: pop 5s infinite;
          }
          .animate-bounce {
            animation: bounce 4s infinite;
          }
          .animate-bounce2 {
            animation: bounce2 4s infinite;
          }
          .animate-touch {
            animation: touchEffect 0.4s ease-in-out;
          }
          
          /* Neon Effect on Hover */
          .hover\\:shadow-neon:hover {
            box-shadow: 0px 0px 20px rgba(255, 0, 128, 0.8), 
                        0px 0px 40px rgba(255, 0, 128, 0.6);
          }

          /* Ripple Effect */
          .ripple {
            position: absolute;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255,255,255,0.2) 10%, transparent 70%);
            transform: scale(0);
            opacity: 0;
            transition: transform 0.5s ease-out, opacity 0.5s ease-out;
          }
          .relative:active .ripple {
            transform: scale(3);
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Clients;
