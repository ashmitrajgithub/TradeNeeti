import React, { useState } from "react";
import { FaInstagramSquare, FaFacebook, FaTelegram, FaMapMarkerAlt } from "react-icons/fa";  
import { IoLogoTwitter } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Hamburger from "./hamburger";
import Location from "../location/Location";
import "./header.css";

function Header({ toggleLocationPopup }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);

  const toggleMenu = () => setIsNavOpen(!isNavOpen);
  const toggleLocationPopupHandler = () => setIsLocationPopupOpen(!isLocationPopupOpen);

  return (
    <div className="main-header ">
      <div className="w-full topbar py-2 bg-black fixed top-0 z-50 main-header headerfirst">
        <div className="headerInfo bg-brown-700 flex flex-wrap justify-between items-center gap-2 text-sm sm:text-base px-4 sm:px-16">
          <div className="headerContact flex flex-wrap gap-4 items-center">
            <a href="tel:+91-6206256034" className="flex items-center gap-1">
              <FaPhoneAlt size={16} className="text-white hover:text-gray-900" />
              <span className="hidden sm:block text-white hover:text-gray-900">+91-6206256034</span>
            </a>
            <a href="mailto:support@tradeneeti.com" className="flex items-center gap-1">
              <MdEmail size={16} className="text-white hover:text-gray-900" />
              <span className="hidden sm:block text-white hover:text-gray-900">support@tradeneeti.com</span>
            </a>
          </div>

          <div className="socialInfo flex gap-3">
            <a href="#" target="_blank">
              <FaInstagramSquare size={20} className="text-white hover:text-gray-900" />
            </a>
            <a href="#" target="_blank">
              <FaFacebook size={20} className="text-white hover:text-gray-900" />
            </a>
            <a href="#" target="_blank">
              <IoLogoTwitter size={20} className="text-white hover:text-gray-900" />
            </a>
            <a href="#" target="_blank">
              <FaTelegram size={20} className="text-white hover:text-gray-900" />
            </a>
            <button onClick={toggleLocationPopupHandler}>
              <FaMapMarkerAlt size={20} className="text-white hover:text-gray-900" />
            </button>
          </div>
        </div>
      </div>

      <header className="w-full p-2 px-5 sm:px-3  bg-black md:pl-7 md:pr-7 top-9 fixed z-50 main-header headersecond">
        <div className="flex justify-between items-center">
          <div>
            <img src="public/assets/BrandLogo.png" alt="TREADNEETI" className="h-7 w-auto sm:h-10" />
          </div>
          <div className="hidden md:flex justify-evenly gap-8 font-semibold text-white">
            <a href="#">Home</a>
            <a href="#">Profile</a>
            <a href="#">Contact Us</a>
            <a href="#">Support</a>
            <a href="#">Courses</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {isNavOpen && <Hamburger toggleMenu={toggleMenu} />}
        </div>
      </header>

      {isLocationPopupOpen && <Location closePopup={toggleLocationPopupHandler} />}

      {/* Landing component added here */}
    </div>
  );
}

export default Header;

