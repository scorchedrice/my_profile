import {useState} from "react";
import {IoTerminalSharp} from "react-icons/io5";
import Modal from "react-modal"
import Terminal from "../Terminal.tsx";

export default function TerminalModal() {
  // modal의 스타일 정보
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      color: 'transparent',
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 모달의 열리는 로직 구현
  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <button type="button" onClick={modalIsOpen ? closeModal : openModal}>
        <IoTerminalSharp className="hover:text-blue-500 transition-colors w-[20px] h-[20px]" />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <Terminal/>
      </Modal>
    </>
  )
}


