import {AnimatePresence, motion} from "framer-motion";
import ProjectSkills from "./ProjectSkills.tsx";
import { CgReadme } from "react-icons/cg";
import useProjectFilter from "../../feature/hooks/useProjectFilter.ts";
import StaticImageRender from "../../shared/static/StaticImageRender.tsx";
import useProjectModal from "../../feature/hooks/useProjectModal.ts";
import useCalculateProjectPageHeight from "../../feature/hooks/useCalculateProjectPageHeight.ts";
import {projectStyles} from "../../shared/styles/projectStyles.ts";

export default function ProjectFilteredList() {
  const { filteredProjects } = useProjectFilter()
  const gridHeight = useCalculateProjectPageHeight();
  const { openModal } = useProjectModal();
  return (
    <div className={projectStyles.listSection} style={{ minHeight: `${gridHeight}px` }}>
      <AnimatePresence mode="sync">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              opacity: { duration: 0.4, ease: "easeOut" },
              scale: { duration: 0.3, ease: "easeOut" },
              layout: { duration: 0.3 }
            }}
            className={projectStyles.projectCard}
            whileHover={{
              scale: 1.02,
              transition: {duration: 0.2},
            }}
          >
            <div className={projectStyles.projectMainImage}>
              <StaticImageRender imageTitle={project.title} />
            </div>
            <div className="p-6 flex flex-col h-[200px] my-1 justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <button
                  type="button"
                  className={projectStyles.README}
                  onClick={() => {
                    openModal(project.id)
                  }}
                >
                  <CgReadme/>
                  README
                </button>
              </div>
              <p className="mb-4">{project.description}</p>
              <ProjectSkills skills={project.skill}/>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}