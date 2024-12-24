// App.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// 임시 섹션 컴포넌트들
const IntroSection = () => (
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#fff"
  }}>
    Intro Section
  </div>
);

const AboutSection = () => (
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#fff"
  }}>
    About Me Section
  </div>
);

// Main Section의 서브 컴포넌트들
const SkillsContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      minHeight: "100vh",
      padding: "4rem",
      color: "#fff"
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>기술 스택</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem"
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: "2rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px"
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Frontend</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>React</li>
          <li>TypeScript</li>
          <li>Next.js</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          padding: "2rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px"
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>Backend</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </motion.div>
    </div>
  </motion.div>
);

const CareerContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      minHeight: "100vh",
      padding: "4rem",
      color: "#fff"
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>커리어</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: "2rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px"
        }}
      >
        <h3>회사 A</h3>
        <p>2022 - 현재</p>
        <p>프론트엔드 개발자</p>
        <ul>
          <li>React 기반 웹 애플리케이션 개발</li>
          <li>사용자 경험 개선</li>
        </ul>
      </motion.div>
    </div>
  </motion.div>
);

const EducationContent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      minHeight: "100vh",
      padding: "4rem",
      color: "#fff"
    }}
  >
    <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>교육 수강</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          padding: "2rem",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "10px"
        }}
      >
        <h3>React 마스터 클래스</h3>
        <p>2023</p>
        <ul>
          <li>고급 React 패턴</li>
          <li>성능 최적화</li>
        </ul>
      </motion.div>
    </div>
  </motion.div>
);

// Main Section 컴포넌트
const MainSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSubSection, setCurrentSubSection] = useState("skills");

  const subSections = [
    { id: "skills", title: "기술 스택", Component: SkillsContent },
    { id: "career", title: "커리어", Component: CareerContent },
    { id: "education", title: "교육 수강", Component: EducationContent }
  ];

  // 스크롤 위치에 따른 현재 섹션 업데이트
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollPosition = container.scrollTop;
      const sectionHeight = window.innerHeight;

      const sectionIndex = Math.floor(scrollPosition / sectionHeight);
      setCurrentSubSection(subSections[sectionIndex]?.id || "skills");
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [subSections]);

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* 좌측 네비게이션 */}
      <motion.div
        style={{
          position: "fixed",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          zIndex: 100
        }}
      >
        {subSections.map((section) => (
          <motion.div
            key={section.id}
            style={{
              opacity: currentSubSection === section.id ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
            onClick={() => {
              if (containerRef.current) {
                const sectionIndex = subSections.findIndex(s => s.id === section.id);
                containerRef.current.scrollTo({
                  top: sectionIndex * window.innerHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: currentSubSection === section.id ? "#fff" : "#666",
                transition: "background-color 0.3s ease"
              }}
            />
            <span style={{
              transform: currentSubSection === section.id ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease"
            }}>
              {section.title}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* 메인 콘텐츠 영역 */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          marginLeft: "150px",
          height: "100vh",
          overflowY: "auto",
          scrollSnapType: "y mandatory"
        }}
      >
        {subSections.map(({ id, Component }) => (
          <div
            key={id}
            style={{
              height: "100vh",
              scrollSnapAlign: "start",
              scrollSnapStop: "always"
            }}
          >
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
};

const EndSection = () => (
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#fff"
  }}>
    End Section
  </div>
);

// 메인 App 컴포넌트
function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    { id: "intro", Component: IntroSection, bgColor: "#1a1a1a" },
    { id: "about", Component: AboutSection, bgColor: "#2a2a2a" },
    { id: "main", Component: MainSection, bgColor: "#3a3a3a" },
    { id: "end", Component: EndSection, bgColor: "#4a4a4a" }
  ];

  return (
    <main style={{ background: "#1a1a1a" }}>
      <div ref={containerRef} style={{ height: `${sections.length * 100}vh` }}>
        {sections.map(({ id, Component, bgColor }, index) => {
          const yTransform = useTransform(
            scrollYProgress,
            [
              index / sections.length,
              (index + 0.5) / sections.length
            ],
            ["100vh", "0vh"]
          );

          const opacityTransform = useTransform(
            scrollYProgress,
            [
              index / sections.length,
              (index + 0.2) / sections.length,
              (index + 0.8) / sections.length,
              (index + 1) / sections.length
            ],
            [0, 1, 1, 0]
          );

          return (
            <motion.section
              key={id}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                background: bgColor,
                y: index === 0 ? 0 : yTransform,
                opacity: opacityTransform
              }}
            >
              <Component />
            </motion.section>
          );
        })}
      </div>
    </main>
  );
}

export default App;