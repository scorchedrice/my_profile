// hooks/usePageTransfer.ts
import {useEffect, useRef, useState} from "react";
import {SECTIONS} from "../../shared/consts/pageConsts";

export default function usePageTransfer() {
  const [currentSection, setCurrentSection] = useState(0);
  const isScrolling = useRef(false);

  // 터치 이벤트
  const touchStart = useRef<number | null>(null);
  const touchMove = useRef<number | null>(null);
  const MIN_SWIPE_DISTANCE = 70;

  // 실제 스크롤 될 container ref
  const containerRef = useRef<HTMLDivElement>(null);
  const ANIMATION_DURATION = 1000;

  const scrollToSection = (sectionIndex: number) => {
    if (!containerRef.current) return;
    isScrolling.current = true;
    setCurrentSection(sectionIndex);
    const targetSection = SECTIONS[sectionIndex];
    window.location.hash = targetSection.id;

    // CSS transform을 활용한 스크롤 애니메이션
    containerRef.current.style.transform = `translateY(-${sectionIndex * 100}%)`;

    setTimeout(() => {
      isScrolling.current = false;
    }, ANIMATION_DURATION);
  };

  // 다음 페이지를 계산하는 함수 (범위를 넘으면 X)
  const getNextSection = (direction : number) => {
    return Math.min(Math.max(currentSection + direction, 0), SECTIONS.length - 1)
  }

  // 터치 이벤트 처리 함수들
  // 터치 이벤트 핸들러들
  const handleTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStart.current !== null) { // 시작점이 있을 때만 이동 기록
      touchMove.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = () => {
    if (isScrolling.current ||
      touchStart.current === null ||
      touchMove.current === null) {
      // 스크롤 중이거나 터치 값이 없으면 처리하지 않음
      touchStart.current = null;
      touchMove.current = null;
      return;
    }

    const distance = touchStart.current - touchMove.current;

    // 충분한 스와이프 거리가 있을 때만 페이지 전환
    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      const direction = distance > 0 ? 1 : -1;
      scrollToSection(getNextSection(direction));
    }

    // 모든 처리 후 초기화
    touchStart.current = null;
    touchMove.current = null;
  };

  // 마우스 휠 이벤트 처리 함수
  const handleWheel = (e: WheelEvent) => {
    if (isScrolling.current) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    scrollToSection(getNextSection(direction));
  };

  // 키보드 이벤트 처리 함수
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isScrolling.current) return;

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        e.preventDefault();
        scrollToSection(getNextSection(1));
        break;
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        scrollToSection(getNextSection(-1));
        break;
    }
  };

  // useEffect통한 URL 변경 감지.
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

  // currentSection이 바뀐 경우
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection]);

  return {
    currentSection,
    containerRef,
    ANIMATION_DURATION,
  };
}