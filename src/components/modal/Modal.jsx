import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, DivModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

function Modal(props) {
  const { url, tags } = props;
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      props.onClose();
    }
  };

  const handleBackdropClick = event => {
    if(event.currentTarget === event.target) {
      props.onClose();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <DivModal>
        <img src={url} alt={tags} />
      </DivModal>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
