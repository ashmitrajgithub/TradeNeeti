import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Updated icon import

function Location({ closePopup }) {
  const handleOpenMap = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300">
      <div className="bg-gradient-to-r from-teal-100 via-lime-100 to-sky-100 rounded-xl shadow-lg p-8 w-96 max-w-md transform transition-all duration-300 ease-in-out scale-100 hover:scale-105"
        style={{
          background: "linear-gradient(180deg, rgba(174, 217, 255, 0.7) 0%, rgba(234, 179, 255, 0.6) 50%, rgba(152, 119, 184, 0.642) 100%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 50%)"
        }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          <span className="bg-gradient-to-r from-teal-400 via-lime-400 to-sky-400 text-transparent bg-clip-text">
            Select Your Location
          </span>
        </h2>
        <ul className="space-y-6">
          <li className="flex justify-between items-center hover:bg-gradient-to-r from-teal-200 to-lime-200 text-gray-800 rounded-lg p-4 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <span className="text-xl font-semibold">Location 1: Handhi Maidan</span>
            <FaMapMarkerAlt
              size={28}
              className="text-teal-500 hover:text-gray-700 transition-colors duration-300"
              onClick={() =>
                handleOpenMap(
                  "https://www.google.com/maps?q=Handhi+Maidan"
                )
              }
            />
          </li>
          <li className="flex justify-between items-center hover:bg-gradient-to-r from-teal-200 to-lime-200 text-gray-800 rounded-lg p-4 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <span className="text-xl font-semibold">Location 2: Raja Bazar</span>
            <FaMapMarkerAlt
              size={28}
              className="text-teal-500 hover:text-gray-700 transition-colors duration-300"
              onClick={() =>
                handleOpenMap(
                  "https://www.google.com/maps?q=Raja+Bazar"
                )
              }
            />
          </li>
        </ul>
        <div className="flex justify-center mt-6">
          <button
            onClick={closePopup}
            className="bg-gradient-to-r from-teal-500 to-sky-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
