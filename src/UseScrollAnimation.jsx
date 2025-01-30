import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    // Trigger on scroll
    window.addEventListener("scroll", handleScroll);

    // Trigger initially in case some elements are already visible
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollAnimation;