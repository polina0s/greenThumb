import * as React from 'react';

import ZoomIn from '../../assets/images/zoom-in.svg';
import classes from './imageGallery.module.scss';

type GalleryImg = {
  src?: string;
  alt?: string;
  id: number;
};

interface ImageGalleryProps {
  images: GalleryImg[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ImageGallery({ images, onClick }: ImageGalleryProps) {
  return (
    <div>
      <div className={classes.wrapper}>
        {images.map((img) => {
          return (
            <div key={img.id} className={classes.imgCont}>
              <img className={classes.img} src={img.src} alt={img.alt} />
            </div>
          );
        })}
        <button className={classes.zoomButton} onClick={onClick}>
          <ZoomIn />
        </button>
      </div>
    </div>
  );
}
