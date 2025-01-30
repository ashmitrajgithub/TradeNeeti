// import React from 'react';
// import { motion } from 'framer-motion';
// import Typewriter from 'typewriter-effect';
// import WhyUs from "./whyUs/WhyUs";

// const Landing = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col items-center justify-center mt-20">
//       {/* Apply background only to this div */}
//       <div className="bg-gray-300 w-full flex flex-col items-center justify-center py-12 px-6 sm:px-10 lg:px-16">
//         <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl mx-auto">
//           {/* Left Side (Text Content) */}
//           <motion.div
//             className="md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: 'easeOut' }}
//           >
//             <motion.h3
//               className="text-xl sm:text-2xl font-semibold text-gray-800"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
//             >
//               <Typewriter
//                 options={{
//                   strings: ['I am a Life Coach.'],
//                   autoStart: true,
//                   loop: true,
//                   cursor: '',
//                   delay: 80,
//                 }}
//               />
//             </motion.h3>

//             <motion.h1
//               className="text-3xl sm:text-4xl font-bold text-gray-900"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
//             >
//               <Typewriter
//                 options={{
//                   strings: ['Struggling in life?', 'I can help.'],
//                   autoStart: true,
//                   loop: true,
//                   cursor: '',
//                   delay: 80,
//                 }}
//               />
//             </motion.h1>

//             <motion.p
//               className="text-base sm:text-lg text-gray-700"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
//             >
//               Discover the simple 3 Steps that I Discovered to Hack Productivity. <br />
//               It works 100%. Wanna transform your life?
//             </motion.p>

//             <motion.button
//               className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
//             >
//               Get Your Free Guide Now
//             </motion.button>
//           </motion.div>

//           {/* Right Side (Image Content) */}
//           <motion.div
//             className="md:w-1/2 flex justify-center items-center"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
//           >
//             <img
//               src="./assets/07.jpeg"
//               alt="Life Coach"
//               className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* Add the WhyUs section below */}
//       <WhyUs />
//     </div>
//   );
// };

// export default Landing;
