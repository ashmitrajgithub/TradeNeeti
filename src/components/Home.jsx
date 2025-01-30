import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import WhyUs from "./whyUs/WhyUs";
import useScrollAnimationLeft from "../useScrollAnimationLeft";

function Home() {
  useScrollAnimationLeft(); 

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<i>FrontEnd Developer</i>",
        "<i>MERN Developer</i>",
        "<i>Competitive Programmer</i>",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    // Clean up the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex justify-between items-center bg-slate-500 mt-home-top gap-5 fade-in scroll-animate slide-left">
        <div className="bg-green-500 w-full ml-5">
          <h1>Welcome to My Website</h1>
          <span ref={typedElement} className="typed-text"></span>
        </div>
        <div className="w-full bg-red-600 flex items-end justify-end mr-5">
          <img
            src="/TradeNeetiAcademyassets/02.jpg"
            alt="Logo"
            className="w-full object-contain"
          />
        </div>
      </div>
      <WhyUs />
    </>
  );
}

export default Home;
