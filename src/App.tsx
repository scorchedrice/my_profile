import { useScroll, motion } from "framer-motion"
import IntroPage from "./pages/IntroPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";
import TechStackPage from "./pages/TechStackPage.tsx";
import Navigator from "./widgets/Navigator.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import FinishPage from "./pages/FinishPage.tsx";

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Navigator/>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "#ff0000",
          transformOrigin: "0%",
          scaleX: scrollYProgress
        }}
      />
      <IntroPage/>
      <AboutMePage/>
      <TechStackPage/>
      <ArchivePage/>
      <ProjectPage/>
      <EducationPage/>
      {/*<FinishPage/>*/}
    </>
  );
}

export default App;