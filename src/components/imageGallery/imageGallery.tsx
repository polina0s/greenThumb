import ZoomIn from '../../assets/images/zoom-in.svg';
import classes from './imageGallery.module.scss';

interface ImageGalleryProps {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  alt1: string;
  alt2: string;
  alt3: string;
  alt4: string;
}

export function ImageGallery({
  img1,
  img2,
  img3,
  img4,
  alt1,
  alt2,
  alt3,
  alt4,
}: ImageGalleryProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img1} alt={alt1} />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img2} alt={alt2} />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img3} alt={alt3} />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img4} alt={alt4} />
      </div>
      <button className={classes.zoomButton}>
        <ZoomIn className={classes.zoomButtonImg} />
      </button>
    </div>
  );
}
