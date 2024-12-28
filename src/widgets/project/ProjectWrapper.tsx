import {AnimatePresence, motion} from "framer-motion";
import ProjectSkills from "./ProjectSkills.tsx";
import { CgReadme } from "react-icons/cg";
import useProjectFilter from "../../feature/hooks/useProjectFilter.ts";


export default function ProjectWrapper() {
  const {
    setProjectType,
    getButtonStyle,
    filteredProjects
  } = useProjectFilter()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/*필터*/}
        <div className="w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
          <div className="space-y-2">
            <button
              className={getButtonStyle("all")}
              onClick={() => setProjectType("all")}
            >
              All
            </button>
            <button
              className={getButtonStyle("team")}
              onClick={() => setProjectType("team")}
            >
              Team
            </button>
            <button
              className={getButtonStyle("personal")}
              onClick={() => setProjectType("personal")}
            >
              Personal
            </button>
          </div>
        </div>

        {/*프로젝트 목록*/}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -20}}
                  transition={{duration: 0.3}}
                  className="bg-white w-full max-w-[400px] rounded-lg cursor-pointer
                           shadow-md hover:shadow-xl transition-shadow"
                  whileHover={{
                    scale: 1.02,
                    transition: {duration: 0.2},
                  }}
                >
                  <div className="h-[200px] w-full rounded-t-lg overflow-hidden">
                    <img
                      src={project.img}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col">
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <button
                        type="button"
                        className="flex items-center gap-1 px-2 text-sm border border-gray-700 rounded-[4px] hover:bg-gray-100 transition-colors"
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
        </div>
      </div>
    </div>
  );
}