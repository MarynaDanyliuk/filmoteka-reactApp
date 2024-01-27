import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect, useCallback } from 'react';

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

  // console.log('Close function:', close);
  return createPortal(
    <div id="movie" className={css.modal} onClick={closeModal}>
      <div className={css.modal_body}>
        <div className={css.modal_content}>
          <button className={css.modal_close} onClick={close}>
            X
          </button>
          {children}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
