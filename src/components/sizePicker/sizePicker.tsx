import { Text } from '../text';
import classes from './sizePicker.module.scss';

export function SizePicker() {
  return (
    <div>
      <Text
        variant="poppinsRegular"
        color="lightGray"
        className={classes.title}
      >
        Size
      </Text>
      <div className={classes.optionsCont}>
        <button className={classes.optionButton}>S</button>
        <button className={classes.optionButton}>M</button>
        <button className={classes.optionButton}>L</button>
      </div>
    </div>
  );
}
