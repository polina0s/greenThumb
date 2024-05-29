import ZoomIn from '../../assets/images/zoom-in.svg';
import classes from './imageGallery.module.scss';

export type GalleryImg = {
  src?: string;
  alt?: string;
  id: number;
};

interface ImageGalleryProps {
  images: GalleryImg[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className={classes.wrapper}>
      {images.map((img) => {
        return (
          <div key={img.id} className={classes.imgCont}>
            <img className={classes.img} src={img.src} alt={img.alt} />
          </div>
        );
      })}
      <button className={classes.zoomButton}>
        <ZoomIn />
      </button>
    </div>
  );
}
