import { Text } from '../../../text';
import classes from './logo.module.scss';

interface LogoProps {
  onClick: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <div className={classes.cont} onClick={onClick}>
      <Text variant="poppinsSemiBold" color="green" className={classes.text}>
        Green
      </Text>
      <Text variant="poppinsSemiBold" className={classes.text}>
        Thumb
      </Text>
    </div>
  );
}
