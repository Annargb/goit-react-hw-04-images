import Modal from 'react-modal';
import { LargeImg, ButtonModal, CloseIcon, Wrapper } from './Modal.styled';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    top: 0,
    position: 'relative',
    maxWidth: '100%',
    height: '90%',
    margin: 'auto',
    border: '0.5px solid #ccc',
    background: '#fff',
    borderRadius: '4px',
    outline: 'none',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
};

Modal.setAppElement('#root');

export const ModalImg = ({ toggleModal, isOpen, img, tags }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    style={customStyles}
    contentLabel="Image Gallery Modal"
  >
    <ButtonModal onClick={toggleModal}>
      <CloseIcon />
    </ButtonModal>
    <Wrapper>
      <LargeImg src={img} alt={tags} />
    </Wrapper>
  </Modal>
);
