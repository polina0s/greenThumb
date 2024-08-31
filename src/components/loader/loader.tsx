import loaderGif from '../../assets/images/loader.gif';
import classes from './loader.module.scss';

export function Loader() {
  return (
    <div className={classes.cont}>
      <img src={loaderGif} className={classes.loader} />
    </div>
  );
}
