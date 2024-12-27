import ProjectWrapper from "../widgets/project/ProjectWrapper.tsx";

export default function ProjectPage() {
  return(
    <div id="Projects" className="h-[300dvh] bg-blue-400 flex flex-col items-center">
      <h1 className="text-[50px] font-bold text-gray-700 ml-8">PROJECTS</h1>
      <ProjectWrapper/>
    </div>
  )
}