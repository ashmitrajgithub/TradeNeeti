import { useState, useEffect } from "react";
import { Twitter, Linkedin } from "lucide-react";
import Courses from "../courses/Courses";

export default function Faculty() {
  const facultyMembers = [
    { name: "Ashmit Raj", role: "Professor of Literature", image: "/assets/Ashmit1.png", twitter: "#", linkedin: "#" },
    { name: "Aakash Kumar", role: "Senior Lecturer, Design", image: "/assets/aakashbhaiya.png", twitter: "#", linkedin: "#" },
    { name: "Ashish Raj", role: "Head of Computer Science", image: "/assets/sir3.png", twitter: "#", linkedin: "#" },
    { name: "Akshat Raj", role: "Associate Professor, UX", image: "/assets/sir3.png", twitter: "#", linkedin: "#" },
    { name: "Ankit Kumar", role: "Dean of Human Resources", image: "/assets/sir3.png", twitter: "#", linkedin: "#" },
    { name: "Emma Dorsey", role: "Senior Researcher, AI", image: "/assets/sir3.png", twitter: "#", linkedin: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextFacultyMembers = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facultyMembers.length);
  };

  const prevFacultyMembers = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + facultyMembers.length) % facultyMembers.length);
  };

  const displayedMembers = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedMembers.push(facultyMembers[(currentIndex + i) % facultyMembers.length]);
  }

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      if (touchEnd - touchStart > 50) prevFacultyMembers();
      else if (touchStart - touchEnd > 50) nextFacultyMembers();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(() => nextFacultyMembers(), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="pt-16 px-1 max-w-full faculty"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Faculty</h2>
        <p className="text-lg text-gray-600 mt-3">
          A team of experienced educators and industry experts dedicated to student success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        {displayedMembers.map((faculty) => (
          <div key={faculty.name} className="flex flex-col items-center text-center">
            <div className="relative w-60 h-60 rounded-full shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 mb-2">
              <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold mt-3 text-gray-800">{faculty.name}</h3>
            <p className="text-gray-500">{faculty.role}</p>

            <div className="flex space-x-4 mt-2 mb-6">
              <a href={faculty.twitter} className="text-gray-500 hover:text-blue-500 transition-all duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href={faculty.linkedin} className="text-gray-500 hover:text-blue-700 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6 mb-10">
        <button
          onClick={prevFacultyMembers}
          className="px-4 py-2 text-lg font-semibold bg-gray-50 hover:bg-gray-300 transition-all duration-300 rounded-full"
        >
          ← 
        </button>
        <button
          onClick={nextFacultyMembers}
          className="px-4 py-2 text-lg font-semibold bg-gray-50 hover:bg-gray-300 transition-all duration-300 rounded-full"
        >
           →
        </button>
      </div>

      {/* <div className="flex justify-center space-x-2 mb-11">
        {facultyMembers.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}

      <Courses />
    </section>
  );
}
