// @ts-ignore
import * as React from 'react';
import IntroPage from "./IntroPage.tsx";
import AboutMePage from "./AboutMePage.tsx";
import Skills from "./Skills.tsx";
import Navigator from "../widgets/Navigator.tsx";
import ArchivePage from "./ArchivePage.tsx";
import EducationPage from "./EducationPage.tsx";
import ProjectPage from "./ProjectPage.tsx";
import Modal from "react-modal";
import FinishPage from "./FinishPage.tsx";

if (typeof window !== 'undefined') {
  Modal.setAppElement('#___gatsby');  // Gatsby의 루트 엘리먼트 ID
}

export function Head() {
  return (
    <>
      <title>한지웅의 프로필/포트폴리오</title>
      <meta name="description" content="FE개발자 한지웅의 프로필/포트폴리오 페이지입니다."/>
      <meta name="keywords" content="프론트엔드,FE,Frontend,개발자,리액트,React,개츠비,Gatsby,타입스크립트,포트폴리오,한지웅,TypeScript"/>
      <meta name="author" content="한지웅,scorchedrice"/>
      <meta name="robots" content="index,follow"/>
      <meta name="language" content="Korean"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      {/* Open Graph */}
      <meta property="og:title" content="FE개발자 한지웅의 포트폴리오"/>
      <meta property="og:description" content="FE개발자 한지웅의 포트폴리오입니다"/>
      <meta property="og:type" content="website"/>
    </>
  )
}

export default function Page() {
  return (
    <>
      <header>
        <Navigator/>
      </header>
      <main>
        <IntroPage/>
        <AboutMePage/>
        <Skills/>
        <ArchivePage/>
        <ProjectPage/>
        <EducationPage/>
      </main>
      <FinishPage/>
    </>
  );
}