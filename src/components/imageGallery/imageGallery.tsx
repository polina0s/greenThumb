import ZoomIn from '../../assets/images/zoom-in.svg';
import classes from './imageGallery.module.scss';

interface ImageGalleryProps {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

export function ImageGallery({ img1, img2, img3, img4 }: ImageGalleryProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img1} alt="img" />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img2} alt="img" />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img3} alt="img" />
      </div>
      <div className={classes.imgCont}>
        <img className={classes.img} src={img4} alt="img" />
      </div>
      <button className={classes.zoomButton}>
        <ZoomIn className={classes.zoomButtonImg} />
      </button>
    </div>
  );
}
