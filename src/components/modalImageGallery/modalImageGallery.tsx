import * as React from 'react';

import Close from '../../assets/images/close.svg';
import { Carousel } from '../carousel';
import classes from './modalImageGallery.module.scss';

interface ModalImageGalleryProps {
  open: boolean;
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ModalImageGallery({
  open,
  onCloseButtonClick,
}: ModalImageGalleryProps) {
  if (open)
    return (
      <div className={classes.wrapper}>
        {/* <Carousel /> */}
        <button className={classes.closeButton} onClick={onCloseButtonClick}>
          <Close className={classes.closeImg} />
        </button>
      </div>
    );
}
