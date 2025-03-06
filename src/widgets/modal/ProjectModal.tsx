import ModalContent from "./ModalContent.tsx";
import Modal from 'react-modal';
import useProjectModal from "../../feature/hooks/useProjectModal.ts";
import {ProjectDescriptionModalStyles} from "../../shared/styles/projectDescriptionModalStyles.ts";
export default function ProjectModal() {
  const { closeModal } = useProjectModal();
  const isOpen = useIsOpen();
  const projectId = useSelectedProjectId();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={ProjectDescriptionModalStyles}
      >
        <ModalContent projectId={projectId} onClose={closeModal} />
      </Modal>
    </>
)
}

import {useIsOpen, useSelectedProjectId} from "../../shared/stores/useModalStore.ts";
