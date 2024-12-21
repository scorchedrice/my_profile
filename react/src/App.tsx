import './App.css'
import {useEffect} from "react";
import IntroPage from "./pages/IntroPage"
import TechStackPage from "./pages/TechStackPage";
import ProjectPage from "./pages/ProjectPage"
import EtcPage from "./pages/EtcPage";
import Navigator from "./widgets/Navigator.tsx";

declare class Pageable {
  constructor(element: string | HTMLElement, options?: any)
}

function App() {
  useEffect(() => {
    if (window.Pageable) {
      const pages = new window.Pageable("#container", {
        animation: 600,
        orientation: "vertical",
        swipeThreshold: 4000,
        throttle: 3000,
        delay: 500,
        events: {
          wheel: true,
          touch: true,
          mouse: true,
          keydown: true,
        },
      });
      return () => {
        pages.destroy();
      };
    }
  }, []);
  return (
    <>
      <div className="pg-wrapper">
        <Navigator/>
        <div className="pg-container" id="container">
          <div data-anchor="page-1" className="pg-page" id="page-1"><IntroPage/></div>
          <div data-anchor="page-2" className="pg-page" id="page-2"><TechStackPage/></div>
          <div data-anchor="page-3" className="pg-page" id="page-3"><ProjectPage/></div>
          <div data-anchor="page-4" className="pg-page" id="page-4"><EtcPage/></div>
        </div>
      </div>
    </>
  )
}

export default App
