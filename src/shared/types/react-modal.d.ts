// react 18 + 이상에서 발생하는 타입에러 방지 목적
declare module 'react-modal' {
  interface ReactModal {
    refs: {
      [key: string]: React.ReactInstance
    }
  }

  const ReactModal: React.ComponentClass<
    ReactModal.Props & React.ClassAttributes<ReactModal>
  > & {
    setAppElement(element: string | HTMLElement): void
  }

  export default ReactModal
}