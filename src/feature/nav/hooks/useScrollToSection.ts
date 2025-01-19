import {useState} from "react";

export default function useScrollToSection() {
  const [isOpen, setIsOpen] = useState(false);
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    const navHeight = 50;

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;
      const duration = 500; // 스크롤 지속시간 (ms)
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      let startTime: number;

      function animation(currentTime: number) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // easeInOutQuad easing function
        const ease = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        window.scrollTo(0, startPosition + (distance * ease));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      try {
        requestAnimationFrame(animation);
        setIsOpen(false);
      } catch (error) {
        console.log('scroll to section error:', error);
        window.scrollTo(0, offsetPosition);
        setIsOpen(false);
      }
    }
  }
  return {
    scrollToSection,
    setIsOpen,
    isOpen
  }
}