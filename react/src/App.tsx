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
        animation: 500,
        orientation: "vertical",
        events: {
          wheel: true,
        },
      });

      pages.on("init", (data : any) => {
        console.log('init', data);
        const currentPage = document.querySelector('.pg-page.pg-active');
        if (currentPage?.getAttribute('data-anchor') === 'page-1') {
          const terminalInput = currentPage.querySelector('input');
          terminalInput?.focus();
        }
      });

      pages.on("scroll.end", (data : any) => {
        console.log("scroll.end", data);
        const currentPage = document.querySelector('.pg-page.pg-active');
        if (currentPage?.getAttribute('data-anchor') === 'page-1') {
          const terminalInput = currentPage.querySelector('input');
          terminalInput?.focus();
        }
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
