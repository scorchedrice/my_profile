// 3. Skills
// 3-1. 컨테이너
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4 // 자식 요소들 사이의 등장 간격
    }
  }
};

// 3-2. 각 기술역할 애니메이션
export const sectionVariants = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  }
};