import './App.css'
import {useEffect} from "react";
import IntroPage from "./pages/IntroPage"
import TechStackPage from "./pages/TechStackPage";
import ProjectPage from "./pages/ProjectPage"
import EtcPage from "./pages/EtcPage";

declare global {
  interface Window {
    fullpage_api : any;
    fullpage: any;
  }
}

function App() {
  useEffect(() => {
    new window.fullpage('#fullpage', {});
  }, [])
  return (
    <>
      <div className="section"><IntroPage/></div>
      <div className="section"><TechStackPage/></div>
      <div className="section"><ProjectPage/></div>
      <div className="section"><EtcPage/></div>
    </>
  )
}

export default App
