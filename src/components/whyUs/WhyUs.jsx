import React, { useEffect } from "react";
import WhytoJoin from "../WhytoJoin";
import ServicesItem from "./WhyUsItems";
import Faculty from "../faculty/Faculty";
import useScrollAnimation from "../../UseScrollAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

function WhyUs() {
  useScrollAnimation();

  const services = [
    {
      index: "1",
      image: "/TradeNeeti/assets/011.jpg",
      title: "Global Market Courses for Industry Excellence",
      description:
        "We offer the most comprehensive global market courses, covering a wide range of industries. Our expert-designed programs provide in-depth insights, equipping professionals with essential skills and knowledge to stay ahead in today's competitive business environment.",
    },
    {
      index: "2",
      image: "/TradeNeeti/assets/013.jpg",
      title: "Empowering Independent and Profitable Traders",
      description:
        "We aim to create independent and consistently profitable traders by providing expert training, in-depth strategies, and practical tools. Our programs empower individuals to make informed decisions, manage risk effectively, and build a sustainable trading career.",
    },
    {
      index: "3",
      image: "/TradeNeeti/assets/014.jpg",
      title: "Global Financial Education and Mentorship",
      description:
        "We mentor students worldwide, offering diverse and comprehensive financial education. Our courses cover various financial concepts, from basic principles to advanced strategies, ensuring that learners gain the knowledge and skills needed to excel in global financial markets.",
    },
    {
      index: "4",
      image: "/TradeNeeti/assets/01.jpg",
      title: "Building a Community of Independent Traders",
      description:
        "Our goal is to create a strong trading community of independent traders, where individuals can share knowledge, insights, and strategies. By fostering collaboration and providing continuous support, we empower traders to achieve success and financial independence.",
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
      <section className="relative flex flex-col items-center bg-[rgb(231,226,216)] md:py-8 lg:py-13">
        {/* Title with AOS animation */}
        <h2
          className="text-center lg:mt-20 text-2xl m-9 md:pb-6 md:text-4xl font-bold"
          data-aos="zoom-in-right"
        >
          Ways I can help you
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

      <Faculty />
    </>
  );
}

export default WhyUs;
