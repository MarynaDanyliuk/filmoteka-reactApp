import { useEffect, useCallback, useState } from 'react';

import css from './Modal.module.css';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ close, children, approve }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  return ReactDOM.createPortal(
    // <div className={css.modal}></div>
    <div id="movie" className={css.modal} onClick={closeModal}>
      <div className={css.modal_body}>
        <div className={css.modal_content}>
          <button
            className={css.modal_close}
            onClick={() => {
              setIsModalOpen(false);
            }}
          >
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
