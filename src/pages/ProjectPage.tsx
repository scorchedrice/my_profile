// @ts-ignore
import * as React from 'react';
import ProjectSectionContent from "../widgets/project/ProjectSectionContent.tsx";

export default function ProjectPage() {
  return(
    <section id="Projects" className="bg-blue-400 flex flex-col items-center">
      <h1 className="text-[50px] font-bold text-gray-700">PROJECTS</h1>
      <ProjectSectionContent/>
    </section>
  )
}