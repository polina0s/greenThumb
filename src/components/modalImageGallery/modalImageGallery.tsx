import Close from '../../assets/images/close.svg';
import classes from './modalImageGallery.module.scss';

export function ModalImageGallery() {
  return (
    <div className={classes.wrapper}>
      <button className={classes.closeButton}>
        <Close className={classes.closeImg} />
      </button>
    </div>
  );
}
