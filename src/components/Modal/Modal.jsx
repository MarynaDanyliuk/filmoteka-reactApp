import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import {
  ModalBody,
  ModalClose,
  ModalContent,
  StyledModal,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, h, children, approve }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', closeModal);
      document.body.style.overflow = '';
    };
  }, [closeModal]);

  return createPortal(
    <StyledModal h={h} onClick={closeModal}>
      <ModalBody>
        <ModalContent h={h}>
          <ModalClose onClick={close} type="button">
            X
          </ModalClose>
          {children}
        </ModalContent>
      </ModalBody>
    </StyledModal>,
    modalRoot
  );
};

export default Modal;

// className={css.modal_close}

// onClick={e => {
//   e.stopPropagation();
//   close();
// }}
