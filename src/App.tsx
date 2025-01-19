import IntroPage from "./pages/IntroPage.tsx";
import AboutMePage from "./pages/AboutMePage.tsx";
import Skills from "./pages/Skills.tsx";
import Navigator from "./widgets/Navigator.tsx";
import ArchivePage from "./pages/ArchivePage.tsx";
import EducationPage from "./pages/EducationPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
// import FinishPage from "./pages/FinishPage.tsx";
import Modal from "react-modal";
import FinishPage from "./pages/FinishPage.tsx";

Modal.setAppElement('#root');

function App() {
  return (
    <>
      <Navigator/>
      <IntroPage/>
      <AboutMePage/>
      <Skills/>
      <ArchivePage/>
      <ProjectPage/>
      <EducationPage/>
      <FinishPage/>
    </>
  );
}

export default App;