// import { FaInstagramSquare, FaFacebook, FaTelegram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { IoLogoTwitter } from "react-icons/io";
// import { IoLogoWhatsapp } from "react-icons/io5";

// function Footer() {
//     return (
//         <>
        
//             <footer className=" relative overflow-hidden z-10   shadow-2xl  footer footer-main">
//                 <div className="flex flex-wrap justify-between items-center mb-5 gap-4 p-5 ">
//                     <img src="/assets/BrandLogo.png" alt="logo" className="w-32 mb-2" />
//                     <div className="flex gap-4">
//                         <a href="https://www.linkedin.com/company/tradeneeti-academy" target="_blank" rel="noreferrer" className="text-2xl text-primary text-white hover:text-blue-400">
//                             <FaLinkedin />
//                         </a>
//                         <a href="https://www.facebook.com/tradeneetiacademy" target="_blank" rel="noreferrer" className="text-2xl text-primary text-primary text-white  hover:text-blue-500">
//                             <FaFacebook />
//                         </a>
//                         <a href="https://www.instagram.com/tradeneeti" target="_blank" rel="noreferrer" className="text-2xl text-primary text-white hover:text-pink-500">
//                             <FaInstagramSquare />
//                         </a>
//                         <a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" target="_blank" rel="noreferrer" className="text-2xl text-primary text-white hover:text-green-200">
//                             <IoLogoWhatsapp />
//                         </a>
//                     </div>
//                 </div>

//                 <div className="container mx-auto pl-4 pr-4 pb-4">
//                     <div className="flex flex-wrap gap-4 justify-center">
//                         <div className="w-5/12 xl:w-2/12">
//                             <h5 className="text-lg font-bold text-primary mb-2 text-yellow-200">About Us</h5>
//                             <ul className="list-none space-y-1">
//                                 <li>
//                                     <a
//                                         href="#"
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                       Home
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href=""
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         About Us
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>


//                         <div className="w-5/12 xl:w-3/12 ">
//                             <h5 className="text-lg font-bold text-primary mb-2 text-yellow-200">Resources</h5>
//                             <ul className="list-none space-y-1">
//                                 <li>
//                                     <a
//                                         href="#"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Faculty                                    </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Courses
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="#"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Apply Now
//                                     </a>
//                                 </li>
                                
//                             </ul>
//                         </div>

//                         <div className="w-5/12  xl:w-2/12">
//                             <h5 className="text-lg font-bold text-primary mb-2 text-yellow-200">Help and Support</h5>
//                             <ul className="list-none space-y-1">
//                                 <li>
//                                     <a
//                                         href="#"
//                                         target="_blank"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Knowledge Center
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !"
//                                         target="_blank"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Contact Us
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         href="tel:+916206256034"
//                                         target="_blank"
//                                         rel="noreferrer"
//                                         className="text-white hover:text-primary transition"
//                                     >
//                                         Premium Support
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <hr className="my-6 border-gray-300" />
//                     <div className="text-center text-sm text-white">
//                         Copyright © 2025{" "}
//                         <a href="/" className=" text-primary">
//                             TreadNeeti. All Right Reserve With TradeNeeti Academy
//                         </a>
//                         <a></a>
//                     </div>
//                 </div>
//             </footer>
            
//         </>
//     );
// }

// export default Footer;


import { FaInstagramSquare, FaFacebook, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

function Footer() {
    return (
        <>
            <footer className="relative overflow-hidden z-10 shadow-2xl footer footer-main">
                <div className="flex flex-wrap justify-between items-center mb-5 gap-4 p-5 ">
                    <img src="/assets/BrandLogo.png" alt="logo" className="w-32 mb-2" />
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/company/tradeneeti-academy" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-400">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.facebook.com/tradeneetiacademy" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-blue-500">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/tradeneeti" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-pink-500">
                            <FaInstagramSquare />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-green-200">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>

                <div className="container mx-auto pl-4 pr-4 pb-4">
                    <div className="flex flex-wrap gap-4 justify-center">
                        <div className="w-5/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">About Us</h5>
                            <ul className="list-none space-y-1">
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">Home</a></li>
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">About Us</a></li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-3/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Resources</h5>
                            <ul className="list-none space-y-1">
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">Faculty</a></li>
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">Courses</a></li>
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">Apply Now</a></li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-2/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Help and Support</h5>
                            <ul className="list-none space-y-1">
                                <li><a href="#" className="text-white hover:text-yellow-300 transition">Knowledge Center</a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=+916206256034&text=Hello !" className="text-white hover:text-yellow-300 transition">Contact Us</a></li>
                                <li><a href="tel:+916206256034" className="text-white hover:text-yellow-300 transition">Premium Support</a></li>
                            </ul>
                        </div>

                        <div className="w-5/12 xl:w-4/12">
                            <h5 className="text-lg font-bold text-yellow-200 mb-2">Our Location</h5>
                            <div className="w-full h-40 xl:h-56 overflow-hidden rounded-lg shadow-lg">
                            <iframe 
            title="Google Map"
            className="w-full h-full lg:w-[600px] lg:h-[400px]" // Tailwind for responsiveness
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.7716569839544!2d85.12343695146656!3d25.62291729491723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59e0692cf2ff%3A0xdd17a34272129ed0!2sTRADENEETI%20ACADEMY!5e0!3m2!1sen!2sin!4v1738596085164!5m2!1sen!2sin"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-300" />
                    <div className="text-center text-sm text-white">
                        Copyright © 2025 <a href="/" className="text-yellow-300">TreadNeeti. All Rights Reserved.</a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
