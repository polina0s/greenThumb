import { Text } from '../text';
import classes from './sizePicker.module.scss';

export function SizePicker() {
  return (
    <div className={classes.size}>
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.sizeTitle}
      >
        Size
      </Text>
      <div className={classes.sizeOptions}>
        <div className={classes.sizeOption}>S</div>
        <div className={classes.sizeOption}>M</div>
        <div className={classes.sizeOption}>L</div>
      </div>
    </div>
  );
}
