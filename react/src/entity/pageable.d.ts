

export interface PageableData {
  index: number;      // 현재 페이지 인덱스
  scrolled: number;   // 현재 스크롤 오프셋
  max: number;        // 최대 스크롤 가능 양
  percent: number;    // 스크롤 위치의 퍼센트
}

export interface Pageable {
  childSelector?: string;      // 페이지로 사용할 요소의 선택자
  anchors?: string[];         // 페이지 앵커 배열
  pips?: boolean;             // 네비게이션 점 표시 여부
  animation?: number;         // 스크롤 애니메이션 시간 (ms)
  delay?: number;             // 스크롤 애니메이션 시작 전 지연 시간
  throttle?: number;          // resize 콜백 실행 간격
  orientation?: 'vertical' | 'horizontal';
  swipeThreshold?: number;    // 스와이프/드래그 거리 임계값
  freeScroll?: boolean;       // 자유 스크롤 허용 여부
  navPrevEl?: string | HTMLElement;
  navNextEl?: string | HTMLElement;
  infinite?: boolean;         // 무한 스크롤
  slideshow?: {
    interval: number;         // 페이지 표시 시간
    delay: number;           // 페이지 전환 지연 시간
  };
  events?: {
    wheel?: boolean;         // 마우스휠 스크롤
    mouse?: boolean;         // 마우스 드래그
    touch?: boolean;         // 터치/스와이프
    keydown?: boolean;       // 키보드 네비게이션
  };
  easing?: (currentTime: number, startPos: number, endPos: number, interval: number) => number;
  onInit?: (data: PageableData) => void;
  onUpdate?: (data: PageableData) => void;
  onBeforeStart?: (data: PageableData) => void;
  onStart?: (data: PageableData) => void;
  onScroll?: (data: PageableData) => void;
  onFinish?: (data: PageableData) => void;
}

declare global {
  interface Window {
    Pageable : typeof Pageable;
  }
}