// @ts-ignore
import * as React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import ProjectSkills from "./ProjectSkills.tsx";
import { CgReadme } from "react-icons/cg";
import useProjectFilter from "../../feature/hooks/useProjectFilter.ts";
import {useState} from "react";
import Modal from "react-modal";
import ProjectModal from "../modal/project/ProjectModal.tsx";
import StaticImageRender from "./StaticImageRender.tsx";

export default function ProjectWrapper() {
  const {
    setProjectType,
    getButtonStyle,
    filteredProjects,
    gridHeight
  } = useProjectFilter()

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<number>(1);
  async function chooseProject(projectId: number) {
    setOpenProjectId(projectId);
    setIsOpenModal(true);
  }
  const projectModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        style={projectModalStyles}
      >
        <ProjectModal projectId={openProjectId} onClose={closeModal} />
      </Modal>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center" style={{ minHeight: `${gridHeight}px` }}>
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
                    className="bg-white w-full max-w-[400px] rounded-lg cursor-pointer
                             shadow-md hover:shadow-xl transition-shadow h-[400px]"
                    whileHover={{
                      scale: 1.02,
                      transition: {duration: 0.2},
                    }}
                  >
                    <div className="h-[200px] w-full rounded-t-lg overflow-hidden">
                      <StaticImageRender imageTitle={project.title} />
                    </div>
                    <div className="p-6 flex flex-col h-[200px] my-1 justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold">{project.title}</h2>
                        <button
                          type="button"
                          className="flex items-center gap-1 px-2 text-sm border border-gray-700 rounded-[4px] hover:bg-gray-100 transition-colors"
                          onClick={() => {
                            chooseProject(project.id)
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
          </div>
        </div>
      </div>
    </>
  );
}