import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import Close from '../../assets/images/close.svg';
import classes from './modal.module.scss';

type ModalProps = {
  open: boolean;
  handleClose: () => void;
};

export function Modal({
  open,
  handleClose,
  children,
}: React.PropsWithChildren<ModalProps>) {
  useEffect(() => {
    const body = document.body;
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') handleClose();
    });

    if (open) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
      document.removeEventListener('keyup', (e) => {
        if (e.key === 'Esc') handleClose();
      });
    };
  }, [open, handleClose]);

  if (open)
    return createPortal(
      <>
        <div className={classes.cont}>
          {children}
          <button className={classes.closeButton} onClick={handleClose}>
            <Close className={classes.closeImg} />
          </button>
        </div>
        <div className={classes.backround} onClick={handleClose}></div>
      </>,
      document.getElementById('root'),
    );
}
