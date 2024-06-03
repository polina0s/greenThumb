import * as React from 'react';

import Close from '../../assets/images/close.svg';
import { Carousel } from '../carousel';
import classes from './modalImageGallery.module.scss';

type Images = {
  src?: string;
  alt?: string;
  id: number;
};

interface ModalImageGalleryProps {
  open: boolean;
  images: Images[];
  onCloseButtonClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function ModalImageGallery({
  open,
  onCloseButtonClick,
  images,
}: ModalImageGalleryProps) {
  if (open)
    return (
      <div className={classes.wrapper}>
        <Carousel images={images} />
        <button className={classes.closeButton} onClick={onCloseButtonClick}>
          <Close className={classes.closeImg} />
        </button>
      </div>
    );
}
