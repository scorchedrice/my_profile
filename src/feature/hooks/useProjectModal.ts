import {useSetIsOpen, useSetSelectedProjectId} from "../../shared/stores/useModalStore.ts";

export default function useProjectModal() {
  const setSelectedProjectId = useSetSelectedProjectId();
  const setIsOpenModal = useSetIsOpen();

  const openModal = (projectId : number) => {
    setSelectedProjectId(projectId);
    setIsOpenModal(true);
  }

  const closeModal = () => {
    setIsOpenModal(false);
  }

  return {
    closeModal,
    openModal,
  };
}