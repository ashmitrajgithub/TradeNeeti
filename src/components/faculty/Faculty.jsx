import { useState, useEffect } from "react";
import { Twitter, Linkedin } from "lucide-react";
import Courses from "../courses/Courses";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Ashmit Raj",
      role: "Professor of Literature",
      image: "public/assets/ashmit1.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Aakash Kumar",
      role: "Senior Lecturer, Design",
      image: "public/assets/aakashbhaiya.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Ashish Raj",
      role: "Head of Computer Science",
      image: "public/assets/sir3.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Akshat Raj",
      role: "Associate Professor, UX",
      image: "public/assets/sir3.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Ankit Kumar",
      role: "Dean of Human Resources",
      image: "public/assets/sir3.png",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Emma Dorsey",
      role: "Senior Researcher, AI",
      image: "public/assets/sir3.png",
      twitter: "#",
      linkedin: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextFacultyMembers = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(facultyMembers.length / itemsPerPage));
  };

  const prevFacultyMembers = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(facultyMembers.length / itemsPerPage)) % Math.ceil(facultyMembers.length / itemsPerPage));
  };

  const displayedMembers = facultyMembers.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  // Handle touch events (for mobile)
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      if (touchEnd - touchStart > 50) {
        prevFacultyMembers();
      } else if (touchStart - touchEnd > 50) {
        nextFacultyMembers();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      once: false,     // Make the animation trigger every time the element comes into view
      offset: 200,     // Offset for when the animation triggers
    });

    // Automatically change faculty members every 3 seconds
    const interval = setInterval(() => {
      nextFacultyMembers();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="pt-16 px-1 max-w-full faculty"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Faculty</h2>
        <p className="text-lg text-gray-600 mt-3">
          A team of experienced educators and industry experts dedicated to student success.
        </p>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-35 mb-16">
        {displayedMembers.map((faculty) => (
          <div
            key={faculty.name}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
          >
            {/* Profile Image */}
            <div className="relative w-60 h-60 rounded-full shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-2">
              <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold mt-3 text-gray-800">{faculty.name}</h3>
            <p className="text-gray-500">{faculty.role}</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-2 mb-6">
              <a
                href={faculty.twitter}
                className="text-gray-500 hover:text-blue-500 transition-all duration-300"
                aria-label={`${faculty.name}'s Twitter`}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={faculty.linkedin}
                className="text-gray-500 hover:text-blue-700 transition-all duration-300"
                aria-label={`${faculty.name}'s LinkedIn`}
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 mb-11 space-x-2">
        {Array.from({ length: Math.ceil(facultyMembers.length / itemsPerPage) }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <Courses />
    </section>
  );
}
