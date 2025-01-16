// @ts-ignore
import * as React from 'react';
import IntroPage from "./IntroPage.tsx";
import AboutMePage from "./AboutMePage.tsx";
import TechStackPage from "./TechStackPage.tsx";
import Navigator from "../widgets/Navigator.tsx";
import ArchivePage from "./ArchivePage.tsx";
import EducationPage from "./EducationPage.tsx";
import ProjectPage from "./ProjectPage.tsx";
import Modal from "react-modal";
import FinishPage from "./FinishPage.tsx";

if (typeof window !== 'undefined') {
  Modal.setAppElement('#___gatsby');  // Gatsby의 루트 엘리먼트 ID
}

export default function Home() {
  return (
    <>
      <Navigator/>
      <IntroPage/>
      <AboutMePage/>
      <TechStackPage/>
      <ArchivePage/>
      <ProjectPage/>
      <EducationPage/>
      <FinishPage/>
    </>
  );
}