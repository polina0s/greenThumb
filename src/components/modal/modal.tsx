import { useEffect } from 'react';

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
    if (open) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }, [open]);

  if (open)
    return (
      <div className={classes.wrapper}>
        <div className={classes.cont}>
          {children}
          <button className={classes.closeButton} onClick={handleClose}>
            <Close className={classes.closeImg} />
          </button>
        </div>
      </div>
    );
}
