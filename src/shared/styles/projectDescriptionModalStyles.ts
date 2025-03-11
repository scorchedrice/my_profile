export const ProjectDescriptionModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const EnlargedImageModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    zIndex: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    position: 'absolute',
    inset: 0,
    border: 'none',
    background: 'transparent',
    overflow: 'hidden',
    padding: 0,
    width: '100vw',
    height: '100vh'
  }
}