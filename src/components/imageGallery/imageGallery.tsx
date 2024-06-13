import ZoomIn from '../../assets/images/zoom-in.svg';
import classes from './imageGallery.module.scss';

type GalleryImg = {
  src?: string;
  alt?: string;
  id: number;
};

interface ImageGalleryProps {
  images: GalleryImg[];
  onZoomButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function ImageGallery({ images, onZoomButtonClick }: ImageGalleryProps) {
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
        <button className={classes.zoomButton} onClick={onZoomButtonClick}>
          <ZoomIn />
        </button>
      </div>
    </div>
  );
}
