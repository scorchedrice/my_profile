import {useState} from "react";

export default function useProjectModal() {
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

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<number>(1);

  function chooseProject(projectId: number) {
    setOpenProjectId(projectId);
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return ({
    isOpenModal,
    projectModalStyles,
    openProjectId,
    closeModal,
    chooseProject,
  })
}