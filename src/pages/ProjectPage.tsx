import ProjectFilteredList from "../widgets/project/ProjectFilteredList.tsx";
import ProjectModal from "../widgets/modal/ProjectModal.tsx";
import ProjectFilter from "../widgets/project/ProjectFilter.tsx";
import {projectStyles} from "../shared/styles/projectStyles.ts";

export default function ProjectPage() {
  return(
    <section id="Projects" className={projectStyles.section}>
      <h1 className={projectStyles.title}>PROJECTS</h1>
      <ProjectModal />
      <div className={projectStyles.content}>
        <ProjectFilter/>
        <ProjectFilteredList/>
      </div>
    </section>
  )
}