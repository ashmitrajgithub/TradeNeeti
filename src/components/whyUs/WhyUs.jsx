import React, { useEffect } from "react";
import WhytoJoin from "../WhytoJoin";
import ServicesItem from "./WhyUsItems";
import useScrollAnimation from "../../UseScrollAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUs() {
  useScrollAnimation();

  const services = [
    {
      index: "1",
      image: "/assets/why01.avif",
      title: "Technology",
      description:
        "Master advanced tools to improve your analysis, refine strategies, and elevate your trading performance, enabling better decision-making and more effective market engagements for optimal results and success.",
    },
    {
      index: "2",
      image: "/assets/Whyus02.jpg",
      title: "Psychology",
      description:
        "Mastering your mindset in trading involves improving focus, controlling emotions, and building resilience. Practice mindfulness, maintain a growth mindset, embrace failure as learning, and develop strategies to manage stress and uncertainty.",
    },
    {
      index: "3",
      image: "/assets/Whyus033.png",
      title: "Education Center",
      description:
        "The Education Center offers 12+ comprehensive courses with hundreds of lessons designed to enhance your trading skills, covering various strategies, techniques, and market analysis to help you grow as a trader.",
    },
    {
      index: "4",
      image: "/assets/whyus044.jpg",
      title: "Placement Support",
      description:
        "We provide comprehensive placement support for trading education, helping students connect with top trading firms, refine their skills, and prepare for interviews to secure rewarding positions in the financial industry.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });

    // Refresh AOS animations on scroll to ensure they trigger properly
    const handleScroll = () => AOS.refresh();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center bg-[rgb(231,226,216)] md:py-8 lg:py-13" id="why-us">
        {/* Title with AOS animation */}
        <h2
          className="text-center m-4 mt-9  lg:mt-12 text-2xl  md:pb-10 md:text-4xl font-bold"
          data-aos="zoom-in-right"
        >
         What Makes <b>TNA Different?</b> 
        </h2>

        {/* Services List */}
        {services.map((service, index) => (
          <ServicesItem
            key={service.index}
            image={service.image}
            title={service.title}
            description={service.description}
            isReverse={index % 2 !== 0}
            data-aos="zoom-in-right"
            data-aos-anchor-placement="center-bottom"
          />
        ))}
      </section>

      {/* WhytoJoin Section with AOS animation */}
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <WhytoJoin />
      </div>
    </>
  );
}

export default WhyUs;