import { Text } from '../../../../components/text';
import classes from './logo.module.scss';

export function Logo() {
  return (
    <div className={classes.cont}>
      <Text variant="poppinsSemiBold" color="green" className={classes.text}>
        Green
      </Text>
      <Text variant="poppinsSemiBold" className={classes.text}>
        Thumb
      </Text>
    </div>
  );
}
