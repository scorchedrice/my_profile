import './App.css'
import {useEffect} from "react";
import IntroPage from "./pages/IntroPage"
import TechStackPage from "./pages/TechStackPage";
import ProjectPage from "./pages/ProjectPage"
import EtcPage from "./pages/EtcPage";

declare class Pageable {
  constructor(element: string | HTMLElement, options?: any) {
  }
}

function App() {
  useEffect(() => {
    new Pageable("#container")
  }, [])
  return (
    <div className="pg-wrapper">
      <div className="pg-container" id="container">
        <div data-anchor="page-1" className="pg-page" id="page-1"><IntroPage/></div>
        <div data-anchor="page-2" className="pg-page" id="page-2"><TechStackPage/></div>
        <div data-anchor="page-3" className="pg-page" id="page-3"><ProjectPage/></div>
        <div data-anchor="page-4" className="pg-page" id="page-4"><EtcPage/></div>
      </div>
    </div>
  )
}

export default App
