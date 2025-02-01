import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function WhytoJoin() {
  const features = [
    {
      icon: "/assets/gif1.webp",
      title: "Expert Guidance",
      description:
        "Gain insights from seasoned traders and mental health professionals who understand the emotional aspects of trading.",
    },
    {
      icon: "/assets/gif2.webp",
      title: "Strong Foundation",
      description:
        "Build a strong trading foundation through ongoing education, weekly webinars, and resources designed to enhance your skills.",
    },
    {
      icon: "/assets/gif3.webp",
      title: "Supportive Community",
      description:
        "Participate in regular meetups to connect with fellow traders, share experiences, and foster a supportive trading network.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
    });

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-up">
          Why Join Tradeneeti?
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {features.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-4">
                    <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}