// hooks/usePageTransfer.ts
import {useEffect, useRef, useState} from "react";
import {SECTIONS} from "../../shared/consts/pageConsts";

export default function usePageTransfer() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ANIMATION_DURATION = 1000;

  const scrollToSection = (sectionIndex: number) => {
    if (isScrolling.current || !containerRef.current) return;

    isScrolling.current = true;
    setCurrentSection(sectionIndex);

    const targetSection = SECTIONS[sectionIndex];
    window.location.hash = targetSection.id;

    containerRef.current.style.transform = `translateY(-${sectionIndex * 100}%)`;

    setTimeout(() => {
      isScrolling.current = false;
    }, ANIMATION_DURATION);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    if (isScrolling.current) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextSection = Math.min(Math.max(currentSection + direction, 0), SECTIONS.length - 1);

    scrollToSection(nextSection);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling.current) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        scrollToSection(Math.min(currentSection + 1, SECTIONS.length - 1));
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        scrollToSection(Math.max(currentSection - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        scrollToSection(0);
        break;
      case 'End':
        e.preventDefault();
        scrollToSection(SECTIONS.length - 1);
        break;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'intro';
      const sectionIndex = SECTIONS.findIndex(section => section.id === hash);
      if (sectionIndex !== -1) {
        scrollToSection(sectionIndex);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleWheelEvent = (e: WheelEvent) => {
      e.preventDefault();
      handleWheel(e as unknown as React.WheelEvent);
    };

    window.addEventListener('wheel', handleWheelEvent, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection]);

  return {
    currentSection,
    containerRef,
    ANIMATION_DURATION,
  };
}