import { useScroll, motion } from "framer-motion"
import IntroPage from "./pages/IntroPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";
import TechStackPage from "./pages/TechStackPage.tsx";
import TerminalModal from "./widgets/modal/TerminalModal.tsx";

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <TerminalModal/>
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
      <TechStackPage/>
      <AboutMePage/>
    </>
  );
}

export default App;