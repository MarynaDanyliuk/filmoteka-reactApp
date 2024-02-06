// import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';
import {
  ModalBody,
  ModalClose,
  ModalContent,
  StyledModal,
} from './Modal.styled';
import { Button } from 'components/shared/Button/Button';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children, approve }) => {
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

  console.log('Close function:', close);
  return createPortal(
    <StyledModal id="movie" onClick={closeModal}>
      <ModalBody>
        <ModalContent>
          <ModalClose
            onClick={e => {
              e.stopPropagation();
              close();
            }}
            type="button"
          >
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
